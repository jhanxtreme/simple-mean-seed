const express = require('express');

const authGuardRouter = express.Router();

const jwtVerifier = require('../helpers/jwt-verifier');

const response = require('../helpers/response');

authGuardRouter.use((req, res, next)=>{
  if(req.headers.authorization){
      jwtVerifier(req.headers.authorization, (err, data)=>{
        if(err){
          return response.errorResponse(err, 401, res);
        }
        next();
      });
  }else{
    return response.errorResponse('Unauthorized access.', 401, res);
  }
});

module.exports = authGuardRouter;
