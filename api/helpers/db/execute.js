
module.exports = {

  friendlyName: 'Format welcome message',
  description: 'Return a personalized greeting based on the provided name.',

  inputs: {
    query: {
      type: 'string',
      example: 'SELECT * FROM tokens;',
      description: 'The nquery to execute.',
      required: true
    }
  },


  fn: async function (inputs, exits) {
    var client = await sails.helpers.db.getdb();
    var result = await client.query(inputs.query);
    client.release();
    return exits.success(result);
  }

};
