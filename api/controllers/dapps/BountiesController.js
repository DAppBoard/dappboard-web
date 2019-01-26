module.exports = {

  index: async function(req, res) {
    return (res.view('dapps/bounties/index', {
    }));
  },
  bounty: async function(req, res) {
    return (res.view('dapps/bounties/bounty', {
      bounty: req.param('bounty_id'),
    }));
  },
  activity: async function(req, res) {
    var results = await sails.helpers.dapps.bounties.activity.with(req.query);
    return (res.json(results));
  },
  activityBounty: async function(req, res) {
    var results = await sails.helpers.dapps.bounties.activityBounty.with({
      bounty_id: req.param('bounty_id'),
    });
    return (res.json(results));
  },
}
