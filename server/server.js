const http = require('http');

const port = process.env.PORT || 9000;

const app = require('./app');

const server = http.createServer(app);

server.listen(port, (err)=>{
  if(err){
    console.error(err);
  }
  console.log(`Server running at port ${port}`);
});
