
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
    'address': {
      type: 'string',
      example: '432432ae3422442',
      description: 'The nquery to execute.',
      required: true,
    }

  },

  fn: async function (inputs, exits) {
    console.log(inputs)
    var knex = await sails.helpers.db.getknex();
    var base = knex.select('*').from('token_transfers_daily').where('address', inputs.address);
    console.log(base.toString())
    var res = await sails.helpers.db.execute(base.toString());
    return exits.success(res.rows);
  }

};
