const config = require('../config.json');

const secret_key = config.env.secret_key;

const expirationTime = config.env.auth_expiration_time;

const jwt = require('jsonwebtoken');

module.exports = (data, cb) => {
  jwt.sign(data, secret_key, { expiresIn: expirationTime }, (err, token) => {
     if(err){
       cb(err, null);
     }else{
       cb(null, token);
     }
  });
};
