const express = require('express');
const jwt = require('jsonwebtoken');
const { jwtVerifyAsync } = require('../utils/jsonWebTokenAsync');
const UsersService = require('../services/UserService');

const users = new UsersService();

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
    const decoded = await jwtVerifyAsync(req.token, process.env.TOKEN_SECRET);
    if (!decoded.loggedIn) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch(err) {
    res.sendStatus(403);
  }
}

async function checkForAccessToSecret(req, res, next) {
  try {
    const decoded = await jwtVerifyAsync(req.token, process.env.TOKEN_SECRET);
    if (!decoded.loggedIn || decoded.sub.id !== parseInt(req.params.id)) {
      res.sendStatus(403);
      return;
    }
    next();
  } catch(err) {
    res.sendStatus(403);
  }
}


module.exports = {
  checkForToken,
  parseToken,
  verifyIsLoggedIn,
  checkForAccessToSecret
};
