
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
    'startdate': {
      type: 'string',
      example: "4323ae3243",
      description: 'The nquery to execute.',
      required: true,
    },
    'enddate': {
      type: 'string',
      example: "4323ae3243",
      description: 'The nquery to execute.',
      required: true,
    },

  },

  fn: async function (inputs, exits) {
    /*var results = await sails.helpers.db.execute(`
      SELECT "meta_events__via__topic_0"."name" AS "name", "meta_events__via__topic_0"."topic" AS "topic", count(*) AS "count"
      FROM "public"."events"
      LEFT JOIN "public"."meta_events" "meta_events__via__topic_0" ON "public"."events"."topic_0" = "meta_events__via__topic_0"."topic"
      WHERE ("public"."events"."address" = '960b236a07cf122663c4303350609a66a7b288c0'
         AND CAST("public"."events"."timestamp" AS date) BETWEEN CAST((NOW() + INTERVAL '-30 day') AS date) AND CAST((NOW() + INTERVAL '-1 day') AS date))
      GROUP BY "meta_events__via__topic_0"."name", "meta_events__via__topic_0"."topic"
      ORDER BY "meta_events__via__topic_0"."name" ASC, "meta_events__via__topic_0"."topic" ASC
    `);*/

    var knex = await sails.helpers.db.getknex();
    var q = knex.select('name', 'topic_0').count('*', 'count').where('timestamp', '>=', inputs['startdate']).where('timestamp', '<=', inputs['enddate']).where('address', inputs['address']).from('events').leftJoin('meta_events', 'topic_0', 'meta_events.topic').groupBy('topic_0', 'name');
    var results = await sails.helpers.db.execute(q.toString());
    var events = results.rows;
    var q_daily = knex.select(knex.raw('CAST("timestamp" AS date) AS "day"')).where('timestamp', '>=', inputs['startdate']).where('timestamp', '<=', inputs['enddate']).where('address', inputs['address']).from('events').groupByRaw('CAST("timestamp" AS date)');
    for (var e of events) {
      q_daily = q_daily.select(knex.raw("COUNT( CASE WHEN topic_0 = '" + e.topic_0 + "' THEN 1 END ) AS " + '"' + e.topic_0 + '"'));
    }
    var results = await sails.helpers.db.execute(q_daily.toString());
    return exits.success({events: events, days: results.rows});
  }

};
