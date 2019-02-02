
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
    var results = await sails.helpers.db.execute(`
      SELECT "meta_events__via__topic_0"."name" AS "name", "meta_events__via__topic_0"."topic" AS "topic", count(*) AS "count"
      FROM "public"."events"
      LEFT JOIN "public"."meta_events" "meta_events__via__topic_0" ON "public"."events"."topic_0" = "meta_events__via__topic_0"."topic"
      WHERE ("public"."events"."address" = '960b236a07cf122663c4303350609a66a7b288c0'
         AND CAST("public"."events"."timestamp" AS date) BETWEEN CAST((NOW() + INTERVAL '-30 day') AS date) AND CAST((NOW() + INTERVAL '-1 day') AS date))
      GROUP BY "meta_events__via__topic_0"."name", "meta_events__via__topic_0"."topic"
      ORDER BY "meta_events__via__topic_0"."name" ASC, "meta_events__via__topic_0"."topic" ASC
    `);
    return exits.success(results.rows);
  }

};
