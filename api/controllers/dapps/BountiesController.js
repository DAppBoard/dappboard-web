module.exports = {

  index: async function(req, res) {
    return (res.view('dapps/bounties/index', {
    }));
  },
  activity: async function(req, res) {
    var results = await sails.helpers.dapps.bounties.activity.with(req.query);
    return (res.json(results));
  },
}
