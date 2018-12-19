
module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
    'limit': {
      type: 'number',
      example: 10,
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: 10,
    },
    'page': {
      type: 'number',
      example: 2,
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: 0,
    },
    'query': {
      type: {},
      example: {},
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: {},
    },
    'ascending': {
      type: 'number',
      example: 0,
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: 1,
    },
    'byColumn': {
      type: 'number',
      example: 2,
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: 0,
    },
    'orderBy': {
      type: 'string',
      example: 'name',
      description: 'The nquery to execute.',
      required: false,
      defaultsTo: '',
    },
    'address': {
      type: 'string',
      example: 'name',
      description: 'The nquery to execute.',
      required: true,
    },
    'startDate': {
      type: 'string',
      example: "",
      description: 'The nquery to execute.',
      required: true,
    },
    'endDate': {
      type: 'string',
      example: "",
      description: 'The nquery to execute.',
      required: true,
    },
  },

  fn: async function (inputs, exits) {
    console.log(inputs)
    var knex = await sails.helpers.db.getknex();
    var base = knex.select('to_address AS address').where('token_address', inputs['address']).where('timestamp', '>=', inputs['startDate']).where('timestamp', '<=', inputs['endDate']).count('* as transfers').from('token_transfers').groupBy('to_address');
    for (var col in inputs.query) {
      if (inputs.query.hasOwnProperty(col)) {
        base.where(col, inputs.query[col])
      }
    }
    if (inputs.orderBy != '') {
      base.orderByRaw(inputs.orderBy  + " " + ( inputs.ascending == 1 ? 'asc' : 'desc'));
    }
    var results = await base.paginate(inputs['limit'], inputs['page'], false);
    // There is a bug in knex-paginator where group by does not count poperly the total
    var knex2 = await sails.helpers.db.getknex();

    var base2 = knex2.where('token_address', inputs['address']).where('timestamp', '>=', inputs['startDate']).where('timestamp', '<=', inputs['endDate']).countDistinct('to_address as total').count('* as total_transfers').from('token_transfers');
    for (var col in inputs.query) {
      if (inputs.query.hasOwnProperty(col)) {
        base2.where(col, inputs.query[col])
      }
    }
    var res = await sails.helpers.db.execute(base2.toString());
    results.count = res.rows[0].total;
    results.total = res.rows[0].total_transfers;

    return exits.success(results);

  }

};
