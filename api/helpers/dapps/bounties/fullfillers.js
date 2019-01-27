
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {

  },

  fn: async function (inputs, exits) {
    var results = await sails.helpers.db.execute(`
      SELECT * from dapp_bounties_network_fullfillers;
    `);
    return exits.success(results.rows);
  }

};
