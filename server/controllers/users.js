const mongoose = require('mongoose');

const bcrypt = require('bcrypt-nodejs');

// helpers
const jwtVerifier = require('../helpers/jwt-verifier');
const jwtSignin = require('../helpers/jwt-signin');
const response = require('../helpers/response');

const Users = require('../model/users');

// GET USERS
let getUsers = (req, res) => {
  Users.find()
       .exec()
       .then(result => response.successResponse(result, null, res))
       .catch(err=> response.errorResponse(err, null, res));
};

// SIGN IN USERS
let signInUsers = (req, res)=>{
  try{
    let { username, password } = req.body;

    let generateHash = (cb) => {
      bcrypt.hash(password, null, null, (err, hash)=>{
        if(err){
          cb(err, null);
        }else{
          cb(null, hash);
        }
      });
    }

    let checkUserExists = (cb) => {
      Users
        .find({ username })
        .exec()
        .then(result=>{
          if(result.length > 0){
            cb(true);
          }else{
            cb(false);
          }
        })
        .catch(err=>{
          response.errorResponse(err, 500, res);
        })
    };

    checkUserExists(result => {
      if(result === true){
        response.errorResponse('User already exists.', 400, res);
      }else{
        generateHash((err, hash) => {
          if(err){
            console.log('Error generateHash', err);
            return response.errorResponse(err, 500, res);
          }
          let newUser = new Users({
            _id: new mongoose.Types.ObjectId(),
            username: username,
            password: hash,
            createdAt: new Date().toISOString(),
            modifiedAt: null
          });

          newUser
            .save()
            .then(({ username, createdAt }) => {
              response.successResponse({ username, createdAt }, 'Successfully create new user!', res)
            })
            .catch(err => {
              console.log('Error newUser.save', err);
              response.errorResponse(err, null, res);
            });
        });
      }
    });

  }catch(err){
    response.errorResponse(err, 500, res)
  }
};

// LOGIN USERS
let loginUsers = (req, res) => {
  try{
    let { username, password } = req.body;

    let generateToken = (cb) => {
      jwtSignin({ username, password }, (err, token) => {
        if(err){
          cb(err, null);
        }else{
          cb(null, token);
        }
      })
    };

    let encryptPassword = (hashPassword, cb) => {
      bcrypt.compare(password, hashPassword, (err, result)=>{
        if(err){
          cb(err, null);
        }else{
          cb(null, result)
        }
      });
    }

    Users.find({ username: username })
         .exec()
         .then(result=>{
           let user = result[0];
           if(user === undefined){
             return response.errorResponse('Unauthorized access.', 401, res);
           }

           let hashPassword = user.password;
           encryptPassword(hashPassword, (err1, passwordResult)=>{
               if(err1){
                 return response.errorResponse(err1, 400, res);
               }

               if(passwordResult === false){
                 return response.errorResponse('Unauthorized access.', 401, res);
               }

               generateToken((err2, token) =>{
                 if(err2){
                   return response.errorResponse(err2, 400, res);
                 }
                 return response.successResponse({ token }, 'You are authorized!', res)
               });

           });
         })
         .catch(err=>{
           console.log('Error', err);
           response.errorResponse(err, 500, res);
         });

  }catch(err){
    response.errorResponse(err, 500, res);
  }
};

// VALIDATE USER
let validateUsers = (req, res) =>{
  try{
    let authHeader = req.headers.authorization;
    if(authHeader === undefined){
      return response.errorResponse('Auth header is missing', 400, res);
    }
    jwtVerifier(authHeader, (err, data)=>{
      if(err){
        return response.errorResponse(err, 400, res);
      }
      console.log('validation status', data);
      return response.successResponse({}, 'valid token', res);
    });
  }catch(err){
    console.log(err);
    return response.errorResponse(err, 500, res);
  }
};

module.exports = {
  getUsers: getUsers,
  signInUsers: signInUsers,
  loginUsers: loginUsers,
  validateUsers: validateUsers
};
