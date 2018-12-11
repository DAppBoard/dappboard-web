
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
