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

  users: async function(req, res) {
    console.log(req.params)
    var contract = await sails.helpers.contracts.get.with({"address": req.params['address']});
    return (res.view('contracts/token_users', {
      contracts: {
        nav: 'token_users',
        contract: contract,
      },
    }));
  },


}
