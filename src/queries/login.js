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

  if (!email) return next({ status: 401, message: `Email must not be blank` })
  if (!password) return next({ status: 401, message: `Password must not be blank` })

  let user
  return knex('users')
    .where({ email })
    .first()
    .then(data => {
      console.log(data);
      if (!data) return next({ status: 401, message: `Invalid email or password` })

      user = data
      bcrypt.compare(password, user.password_hash)
        .then(function(response){
          if(response === false){
            return next({ status: 401, message: `Invalid email or password` })
          }
          const claim = { user_id: user.id }
          const token = jwt.sign(claim, process.env.TOKEN_SECRET, {
            expiresIn: '1 day'
          })
          return res.status(201).send({token, claim})
        })
    })
}

  const authStatus = (req, res, next) => {
    const { token } = req.body;

    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      let userId = decoded.user_id
      res.status(201).send({userId})
    });
  }

module.exports = { authLogin, authStatus };
