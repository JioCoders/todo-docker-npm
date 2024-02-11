const pg = require('pg');
const config = require('./config');

const pool = new pg.Pool(config);
// const client = new pg.Client(config);

// pool.connect(async function (err) {
//   if (err) throw err;
//   await pool.query("SELECT VERSION()", [], function (err, result) {
//     if (err) throw err;

//     console.log(result.rows[0]);
//     pool.end(function (err) {
//       if (err) throw err;
//     });
//   });
// });

// pool
//   .connect()
//   .then(() => console.log("connected to database"))
//   .catch((err) => console.error(err));

/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://aiven.io/docs/products/postgresql/howto/connect-node
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
  const { rows, fields } = await pool.query(query, params);

  return rows;
}

module.exports = {
  query
}