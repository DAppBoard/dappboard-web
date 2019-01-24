
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {

  },

  fn: async function (inputs, exits) {
    var results = await sails.helpers.db.execute(`
      SELECT * FROM dapp_0x_daily  WHERE "date" > NOW() - INTERVAL '90 day'
      `);
    return exits.success(results.rows);

  }

};
