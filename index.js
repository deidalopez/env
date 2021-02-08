const express = require('express'); 
const bootDb = require('./model/index');
const router = require('./routes');
require('dotenv').config();

//process is the internal variable for node, kinda how node refers to itself
const port = process.env.PORT;

const app = express(); 

app.use(express.json());
// if you wanted the router to work for only the routes that work for API --> .use and router handlers are very similar
app.use('/api', router);

// app.use(router) //

// this function is asynchronous so we need to await for it and need to run a self invoking function
(async () => {
  await bootDb();
  app.listen(port,  () => {
    console.log(`running on http://localhost:${port}`);
  });
}) ();

// environmental variables are variables from the environment where our environment is running