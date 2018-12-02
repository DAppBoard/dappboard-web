var knex = require('knex')({client: 'pg',
connection: {
  user: process.env.DAPPBOARD_PSQL_USER,
  host: process.env.DAPPBOARD_PSQL_HOST,
  database: process.env.DAPPBOARD_PSQL_DB,
  password: process.env.DAPPBOARD_PSQL_PASSWORD,
  port: 25060,
  ssl: true,
  max: 3,
}});
const setupPaginator = require('knex-paginator');
setupPaginator(knex);

module.exports = {

  friendlyName: 'Format welcome message',
  description: 'Return a personalized greeting based on the provided name.',

  inputs: {
  },


  fn: async function(inputs, exits) {
    return (exits.success(knex));
  }

};
