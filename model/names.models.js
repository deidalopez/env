const bootDb = require('.');


exports.addName = async (name) => {
  const pool = await bootDb(); // once it boots, itll return a pool, and you can create queries with this pool
  const name = await pool.query('INSERT INTO name ("id", "name") VALUES (default, $1)', [name]); // what will be the query if we want to put something
  return 'OK';
};