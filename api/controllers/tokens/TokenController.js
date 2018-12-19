module.exports = {

  tokens: async function(req, res) {
    return (res.view('tokens/list', {
      nav: {
        name: 'tokens',
      },
      token_type: 'erc20',
    }));
  },

  nfts: async function(req, res) {
    return (res.view('tokens/list', {
      nav: {
        name: 'nfts',
      },
      token_type: 'erc721',
    }));
  },

  list: async function(req, res) {
    if (req.query.query == "" || req.query.query == null) {
      req.query.query = {};
    }
    if (req.param('type', "") == "erc20") {
      req.query.query.is_erc20 = 'true'
    }
    if (req.param('type', "") == "erc721") {
      req.query.query.is_erc721 = 'true'
    }
    var results = await sails.helpers.tokens.listSummary.with(req.query);
    return (res.json(results));
  },

  daily: async function(req, res) {
    var results = await sails.helpers.tokens.dailyVolume.with({"address": req.params['token']});
    return (res.json(results));
  },

  users: async function(req, res) {
    if (req.query.query == "" || req.query.query == null) {
      req.query.query = {};
    }
    req.query.address = req.param('token');
    var results = await sails.helpers.tokens.listUsers.with(req.query);
    return (res.json(results));
  },

}
