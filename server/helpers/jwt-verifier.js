const config = require('../config.json');

const secret_key = config.env.secret_key;

const jwt = require('jsonwebtoken');

module.exports = (authHeader, cb) => {
  try{
    const auth = authHeader.split(' ');
    if(auth[0] !== 'Bearer'){
      cb('Unauthorized access. Unknown bearer.', null);
    }else{
      const token = auth[1];
      if(typeof token === undefined){
          cb('Unauthorized access. Token is missing.', null);
      }else{
        jwt.verify(token, secret_key, (err, data)=>{
          if(err){
            cb(err, null);
          }else{
            cb(null, data);
          }
        });
      }
    }
  }catch(err){
    cb(err, null);
  }
}
