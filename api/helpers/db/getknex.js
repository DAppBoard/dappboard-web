var knex = require('knex')({client: 'pg'});

module.exports = {

  friendlyName: 'Format welcome message',
  description: 'Return a personalized greeting based on the provided name.',

  inputs: {
  },


  fn: async function(inputs, exits) {
    return (exits.success(knex));
  }

};
