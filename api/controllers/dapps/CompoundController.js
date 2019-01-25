module.exports = {

  index: async function(req, res) {
    var zrx = await sails.helpers.dapps.zrx.globalStats.with({});
    return (res.view('dapps/compound/index', {
      zrx: zrx,
    }));
  },
  activity: async function(req, res) {
    var results = await sails.helpers.dapps.compound.activity.with(req.query);
    return (res.json(results));
  },
  dailyActivity: async function(req, res) {
    var dailyActivity = await sails.helpers.dapps.zrx.dailyActivity.with({});
    return (res.json(dailyActivity));
  },
}
