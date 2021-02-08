const { Pool } = require('pg');

async function bootDb() {
  const pool = new Pool({
   host: "localhost",
   user: "postgres",
   port: 5432,
   password: "password",
   database:"names"
  }); 
  await  pool.connect();
  console.log('connected to db');
  return pool;
}

module.exports = bootDb;


// a client can only create one connection, while a pool can create as many clients as it wants depending on requests
// like if 5 pople are the same time are accessing your app, itll create 5 clients and serve in parallel way
// if 5 people were accessing your app and didnt have a pool, it would have to be one person at a time