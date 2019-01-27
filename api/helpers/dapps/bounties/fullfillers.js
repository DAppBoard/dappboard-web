
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
    'limit': {
      type: 'number',
      example: 10,
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: 10,
    },
    'page': {
      type: 'number',
      example: 2,
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: 0,
    },
  },

  fn: async function (inputs, exits) {
    console.log(inputs)
    var knex = await sails.helpers.db.getknex();
    var base = knex.select('*').from('dapp_bounties_network_fulfillers');
    var results = await base.paginate(inputs['limit'], inputs['page'], true);
    results.count = results.total;
    return exits.success(results);

  }

};
