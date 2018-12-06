module.exports = {

  tokens: async function(req, res) {
    return (res.view('tokens/list', {
      nav: {
        name: 'tokens',
      },
      currentPeriod: '7d',
    }));
  },

  nfts: async function(req, res) {
    return (res.view('tokens/list', {
      nav: {
        name: 'nfts',
      },
      currentPeriod: '7d',
    }));
  },

  list: async function(req, res) {
    console.log(req.query)
    var results = await sails.helpers.tokens.listSummary.with(req.query);
    return (res.json(results));
  },

}
