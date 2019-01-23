
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {

  },

  fn: async function (inputs, exits) {
    var results = await sails.helpers.db.execute(`
      SELECT   (
        SELECT COUNT(*)
        FROM   dapp_0x_pairs
        ) AS total_pairs,
     COUNT(*) AS total_trades,
     COUNT(DISTINCT(relayer)) AS total_relayers
     FROM dapp_0x WHERE "timestamp" > NOW() - INTERVAL '7 day';
    `);
    return exits.success(results.rows[0]);

  }

};
