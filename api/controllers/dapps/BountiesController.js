module.exports = {

  index: async function(req, res) {
    return (res.view('dapps/bounties/index', {
    }));
  },
  activity: async function(req, res) {
    var results = await sails.helpers.dapps.compound.activity.with(req.query);
    return (res.json(results));
  },
  dailyActivity: async function(req, res) {
    var dailyActivity = await sails.helpers.dapps.compound.dailyActivity.with({});
    return (res.json(dailyActivity));
  },
  distributionActivityToken: async function(req, res) {
    var distributionActivityToken = await sails.helpers.dapps.compound.distributionActivityToken.with({});
    return (res.json(distributionActivityToken));
  },
}
