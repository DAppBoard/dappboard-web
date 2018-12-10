
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
    }

  },

  fn: async function (inputs, exits) {
    console.log(inputs)
    var knex = await sails.helpers.db.getknex();
    var base = knex.select('*').from('token_transfers_summary');
    for (var col in inputs.query) {
      if (inputs.query.hasOwnProperty(col)) {
        base = base.where(col, inputs.query[col])
      }
    }
    if (inputs.orderBy != '') {
      base.orderByRaw(inputs.orderBy  + " " + ( inputs.ascending == 1 ? 'asc' : 'desc'));
    }
    console.log(base.toString())
    var results = await base.paginate(inputs['limit'], inputs['page'], true);
    results.count = results.total;
    return exits.success(results);

  }

};
