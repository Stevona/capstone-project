const jwt = require('jsonwebtoken');

const secret = 'secretsecret';

async function checkToken(token) {
  if (token) {
    try {
      jwt.verify(token, secret);
      return true;
    } catch(error) {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = { checkToken };