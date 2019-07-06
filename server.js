const express = require('express');
const app = express();

const PORT = 8888;
var routes = require('./route')

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

app.use('/auth',routes)
