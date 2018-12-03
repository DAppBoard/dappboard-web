
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
    'address': {
      type: 'string',
      example: "32543ae32332",
      description: 'The nquery to execute.',
      required: true,
    },
    'data': {
      type: {},
      example: {},
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: {},
    },
  },

  fn: async function (inputs, exits) {
    console.log(inputs)
    var knex = await sails.helpers.db.getknex();
    var base = knex.from('tokens').where('address', inputs['address']);
    if (inputs.data.name != null) {
      base.update('name', inputs.data.name);
    }
    if (inputs.data.symbol != null) {
      base.update('symbol', inputs.data.symbol);
    }
    if (inputs.data.decimals != null) {
      if (isNaN(inputs.data.decimals)) {
        base.update('decimals', null);
      } else {
        base.update('decimals', inputs.data.decimals);
      }
    }
    if (inputs.data.is_erc20 != null) {
      base.update('is_erc20', inputs.data.is_erc20);
    }
    if (inputs.data.is_erc721 != null) {
      base.update('is_erc721', inputs.data.is_erc721);
    }
    var res = await sails.helpers.db.execute(base.toString());
    return exits.success(res);
  }

};
