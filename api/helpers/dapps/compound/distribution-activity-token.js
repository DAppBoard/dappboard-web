
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {

  },

  fn: async function (inputs, exits) {
    var results = await sails.helpers.db.execute(`
      SELECT "public"."dapp_compound_borrow"."asset" AS "asset", count(*) AS "count",
      name
      FROM "public"."dapp_compound_borrow", tokens
      WHERE CAST("public"."dapp_compound_borrow"."timestamp" AS date) BETWEEN CAST((NOW() + INTERVAL '-7 day') AS date)
         AND CAST(now() AS date) AND asset=address
      GROUP BY "public"."dapp_compound_borrow"."asset", name
      ORDER BY count DESC
    `);

    return exits.success(results.rows);

  }

};
