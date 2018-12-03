module.exports = {

  list: async function(req, res) {
    console.log(req.query)
    var results = await sails.helpers.tokens.list.with(req.query);
    return (res.json(results));
  },

  update: async function(req, res) {
    console.log({"address": req.params['address'], token: req.body});
    var results = await sails.helpers.tokens.update.with({"address": req.params['address'], data: req.body});
    return (res.json(results));
  },

}
