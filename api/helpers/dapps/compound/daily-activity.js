
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {

  },

  fn: async function (inputs, exits) {
    var results = await sails.helpers.db.execute(`
      SELECT CAST("public"."dapp_compound_borrow"."timestamp" AS date) AS "day",
       count(CASE WHEN "public"."dapp_compound_borrow"."amount" > 0 THEN 1 END) AS "borrows",
              count(CASE WHEN "public"."dapp_compound_borrow"."amount" < 0 THEN 1 END) AS "repays",
        count(distinct "public"."dapp_compound_borrow"."account") AS "borrowers"
      FROM "public"."dapp_compound_borrow"
      WHERE (
          CAST("public"."dapp_compound_borrow"."timestamp" AS date) BETWEEN CAST((NOW() + INTERVAL '-90 day') AS date) AND CAST(now() AS date))
      GROUP BY CAST("public"."dapp_compound_borrow"."timestamp" AS date)
      ORDER BY CAST("public"."dapp_compound_borrow"."timestamp" AS date) ASC
    `);

    return exits.success(results.rows);

  }

};
