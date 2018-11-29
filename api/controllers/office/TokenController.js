module.exports = {

  list: async function(req, res) {
    var results = await sails.helpers.tokens.list();
    return (res.json(results));
  },

  update: async function(req, res) {
    return (res.json(true));
  },

}
