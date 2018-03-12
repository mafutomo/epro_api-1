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
      // res.cookie('token', token, {
      //   httpOnly: true, 
      //   expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      //   secure: router.get('env') === 'production'
      // })
      res.status(201).send(token)
    })
}

const authStatus = (checkForToken, parseToken, verifyIsLoggedIn, (req, res, next) => {
  const { email, passworrd } = req.body;

  users.getUser(email)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).send(`There was an error verifying user login: ${err}`)
    })
});

function checkForToken(req, res, next) {
  if (!req.headers.auth || !req.headers.auth.includes('Bearer')) {
    res.sendStatus(403);
  } else {
    next();
  }
}

function parseToken(req, res, next) {
  try {
    const token = req.headers.auth.split(' ')[1];
    req.token = token;
    next();
  } catch(err) {
    res.sendStatus(401);
  }
}

async function verifyIsLoggedIn(req, res, next) {
  try {
    const decoded = await jwtVerifyAsync(req.token, TOKEN_SECRET);
    if (!decoded.loggedIn) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch(err) {
    res.sendStatus(403);
  }
}

// const encrypt = (password) => {
//   return bcrypt.hash(password, 10)
// }
// encrypt('penny').then(data => console.log(data))


module.exports = { authLogin, authStatus };
