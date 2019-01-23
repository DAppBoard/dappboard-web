module.exports = {

  index: async function(req, res) {
    return (res.view('dapps/zrx/index', {
      nav: {
        name: 'tokens',
      },
      token_type: 'erc20',
    }));
  },
  pairs: async function(req, res) {
    var results = await sails.helpers.dapps.zrx.listPairs.with(req.query);
    return (res.json(results));
  }
}
