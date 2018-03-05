const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { jwtSignAsync } = require('../utils/jsonwebTokenAsync');
const UsersService = require('../services/UsersService');

router.use(bodyParser.json());

 const authLogin = (req, res, next) => {
  const { email, password } = req.body

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
      const token = jwt.sign(claim, process.env.JWT_KEY, {
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

// const users = new UsersService();
//
// const loginUser = ('/users/', verifyLoginBody, checkIfUserIsRegistered, tryUserLogin, generateToken, (req, res)) => {
//   const token = req.user.token;
//   res.set('Auth', `Bearer: ${token}`).send('password correct, jwt set in auth cookie');
// });
//
// function verifyLoginBody(req, res, next) {
//   const { email, password } = req.body;
//   if (!email && !password) {
//     res.status(401).send('Email and password required');
//   } else if (!email) {
//     res.status(401).send('Email required');
//   } else if (!password) {
//     res.status(401).send('Password required');
//   } else {
//     next();
//   }
// }
//
// function checkIfUserIsRegistered(req, res, next) {
//   const { email, password } = req.body;
//
//   users.getUser(email)
//     .then(user => {
//       if (!user) {
//         res.status(403).send('User not registered');
//       } else {
//         // Make user object accessible to future middlewares
//         req.user = user;
//         next();
//       }
//     })
//     .catch(err => {
//       res.status(500).send(`There was an error logging in: ${err}`);
//     });
// }
//
// function tryUserLogin(req, res, next) {
//   const { email, password } = req.body;
//
//   users.tryLoginUser(email, password)
//     .then(loggedIn => {
//       if (!loggedIn) {
//         res.status(403).send('Incorrect Password');
//       } else {
//         next();
//       }
//     })
//     .catch(err => {
//       res.status(500).send(`There was an error logging in: ${err}`);
//     });
// }
//
// async function generateToken(req, res, next) {
//
//   const jwtPayload = {
//     iss: 'jwt_lesson_app',
//     sub: {
//       id: req.user.id
//     },
//     loggedIn: true
//   };
//
//   try {
//     const token = await jwtSignAsync(jwtPayload, process.env.TOKEN_SECRET, {expiresIn: '1d'});
//     req.user.token = token;
//     next();
//   } catch(err) {
//     throw(err);
//   }
// }


module.exports = { authLogin };
