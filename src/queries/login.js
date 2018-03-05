const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { jwtSignAsync } = require('../utils/jsonwebTokenAsync');
const UsersService = require('../services/UsersService');


const users = new UsersService();

router.use(bodyParser.json());

router.post('/', verifyLoginBody, checkIfUserIsRegistered, tryUserLogin, generateToken, (req, res) => {
  const token = req.user.token;
  res.set('Auth', `Bearer: ${token}`).send('password correct, jwt set in auth cookie');
});

function verifyLoginBody(req, res, next) {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(401).send('Email and password required');
  } else if (!email) {
    res.status(401).send('Email required');
  } else if (!password) {
    res.status(401).send('Password required');
  } else {
    next();
  }
}

function checkIfUserIsRegistered(req, res, next) {
  const { email, password } = req.body;

  users.getUser(email)
    .then(user => {
      if (!user) {
        res.status(403).send('User not registered');
      } else {
        // Make user object accessible to future middlewares
        req.user = user;
        next();
      }
    })
    .catch(err => {
      res.status(500).send(`There was an error logging in: ${err}`);
    });
}

function tryUserLogin(req, res, next) {
  const { email, password } = req.body;

  users.tryLoginUser(email, password)
    .then(loggedIn => {
      if (!loggedIn) {
        res.status(403).send('Incorrect Password');
      } else {
        next();
      }
    })
    .catch(err => {
      res.status(500).send(`There was an error logging in: ${err}`);
    });
}

async function generateToken(req, res, next) {

  const jwtPayload = {
    iss: 'jwt_lesson_app',
    sub: {
      id: req.user.id
    },
    loggedIn: true
  };

  try {
    const token = await jwtSignAsync(jwtPayload, process.env.TOKEN_SECRET, {expiresIn: '1d'});
    req.user.token = token;
    next();
  } catch(err) {
    throw(err);
  }
}


module.exports = router;
