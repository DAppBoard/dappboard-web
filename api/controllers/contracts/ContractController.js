module.exports = {


  events: async function(req, res) {
    var contract = await sails.helpers.contracts.get.with({"address": req.params['address']});
    var title = "DAppBoard | Events for 0x" + req.params['address'];
    var description = "Smart contract analytics for Ethereum at 0x" + req.params['address'];
    if (contract == null) {
      return res.notFound();
    }
    return (res.view('contracts/contracts_events', {
      description: title,
      title: description,
      contracts: {
        nav: 'contracts_events',
        contract: contract,
      },
    }));
  },

  types: async function(req, res) {
    var p = req.params;
    var types = await sails.helpers.contracts.getEvents.with(p);
    return (res.json(types));
  },

}
