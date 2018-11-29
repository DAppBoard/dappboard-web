var pg = require('pg')

var pool = new pg.Pool({
  user: process.env.DAPPBOARD_PSQL_USER,
  host: process.env.DAPPBOARD_PSQL_HOST,
  database: process.env.DAPPBOARD_PSQL_DB,
  password: process.env.DAPPBOARD_PSQL_PASSWORD,
  port: 25060,
  ssl: true,
  max: 3,
});

module.exports = {

  friendlyName: 'Format welcome message',
  description: 'Return a personalized greeting based on the provided name.',

  inputs: {
  },


  fn: async function (inputs, exits) {
    var c = await pool.connect();
     return exits.success(c);
  }

};
