module.exports = {

  index: async function(req, res) {
    var contract = await sails.helpers.contracts.get.with({"address": req.params['address']});
    return (res.view('contracts/token', {
      contracts: {
        nav: 'token',
        contract: contract,
      },
    }));
  },


}
