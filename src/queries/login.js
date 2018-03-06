const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

router.use(bodyParser.json());

 const authLogin = (req, res, next) => {
  const { email, password } = req.body
  console.log('email', email);

  if (!email) return next({ status: 400, message: `Email must not be blank` })
  if (!password) return next({ status: 400, message: `Password must not be blank` })

  let user
  return knex('users')
    .where({ email })
    .first()
    .then(data => {
      console.log(data);
      if (!data) return next({ status: 400, message: `Bad email or password` })

      user = data
      return bcrypt.compare(password, user.password_hash)
    })
    .then(() => {
      const claim = { user_id: user.id }
      const token = jwt.sign(claim, process.env.TOKEN_SECRET, {
        expiresIn: '1 day'
      })
      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        secure: router.get('env') === 'production'
      })
      // delete user.password_hash
      res.status(201).send(user)
    })
}


module.exports = { authLogin };
