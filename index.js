const express = require('express'); 
// require('dotenv').config();

//process is the internal variable for node, kinda how node refers to itself
const port = process.env.PORT;

const app = express(); 

app.listen(port,  () => {
  console.log(`running on http://localhost:${port}`);
});

// environmental variables are variables from the environment where our environment is running