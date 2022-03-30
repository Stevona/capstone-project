const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

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