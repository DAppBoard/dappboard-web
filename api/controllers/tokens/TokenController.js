module.exports = {

  tokens: async function(req, res) {
    return (res.view('tokens/list', {
      nav: {
        name: 'tokens',
      }
    }));
  },

  nfts: async function(req, res) {
    return (res.view('tokens/list', {
      nav: {
        name: 'nfts',
      }
    }));
  },

  list: async function(req, res) {
    console.log(req.query)
    var results = await sails.helpers.tokens.list.with(req.query);
    return (res.json(results));
  },

}
