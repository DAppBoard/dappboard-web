
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
    'address': {
      type: 'string',
      example: "4323ae3243",
      description: 'The nquery to execute.',
      required: true,
    },


  },

  fn: async function (inputs, exits) {
    var knex = await sails.helpers.db.getknex();
    var get_token = knex.select('*').from('tokens').where('address', inputs.address);
    var token_res = await sails.helpers.db.execute(get_token.toString());
    var res = {
      address: inputs.address,
      is_token: false,
      tags: ['smart contract'],
    }
    if (token_res.rows != null && token_res.rows[0] != 0) {
      res.is_token = true;
      res.is_erc20 = token_res.rows[0].is_erc20;
      if (res.is_erc20) {
        res.tags.push('erc_20');
      }
      res.is_erc721 = token_res.rows[0].is_erc721;
      if (res.is_erc721) {
        res.tags.push('erc_721');
      }
      res.symbol = token_res.rows[0].symbol;
      res.name = token_res.rows[0].name;
      res.decimals = token_res.rows[0].decimals;
    }
    return exits.success(res);
  }

};
