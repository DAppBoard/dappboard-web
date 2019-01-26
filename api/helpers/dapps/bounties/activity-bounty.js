
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
    'bounty_id': {
      type: 'number',
      example: 2,
      description: 'The nquery to execute.',
      required: true,
    },
  },

  fn: async function (inputs, exits) {
    var knex = await sails.helpers.db.getknex();
    var base = knex.select('*').from('dapp_bounties_network').where('bounty_id', inputs.bounty_id);
    var results = await base.paginate(inputs['limit'], inputs['page'], true);
    results.count = results.total;
    return exits.success(results);

  }

};
