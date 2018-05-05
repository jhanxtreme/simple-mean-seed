const config = require('./config.json');

const express = require('express');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// routes
const usersRoute = require('./routes/users.route');

mongoose.connect(config.db.connection_string + config.db.name, (err)=>{
  if(err) throw err;
  console.log('Successfully connected to database!');
});

// parse application/x-www-fomr-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// cors enabled for all
app.use(cors());

// middleware
app.use((req, res, next)=>{
    console.log('Base middleware was fired!');
    next();
});

// base route
app.get('/', (req, res)=>{
  res.status(200).json({
    message: 'Welcome to JhanXtreme app'
  });
});

app.use('/users', usersRoute);

module.exports = app;
