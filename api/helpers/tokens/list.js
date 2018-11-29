
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
  },

  fn: async function (inputs, exits) {
    var knex = await sails.helpers.db.getknex();
    var query = knex.select('*').from('tokens').toString();
    var results = await sails.helpers.db.execute.with({'query': query});
    return exits.success(results);
  }

};