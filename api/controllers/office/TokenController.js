module.exports = {

  list: async function(req, res) {
    console.log(req.query)
    var results = await sails.helpers.tokens.list.with(req.query);
    return (res.json(results));
  },

  update: async function(req, res) {
    return (res.json(true));
  },

}
