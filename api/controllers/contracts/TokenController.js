module.exports = {

  index: async function(req, res) {
    var contract = await sails.helpers.contracts.get.with({"address": req.params['address']});
    if (contract == null) {
      return res.notFound();
    }
    return (res.view('contracts/token', {
      description: "Discover " + contract.name + " Ethereum's token information on DAppBoard analytics tool.",
      title: "DAppBoard " + contract.name + " token information on Ethereum.",
      contracts: {
        nav: 'token',
        contract: contract,
      },
    }));
  },

  users: async function(req, res) {
    var contract = await sails.helpers.contracts.get.with({"address": req.params['address']});
    if (contract == null) {
      return res.notFound();
    }
    return (res.view('contracts/token_users', {
      description: "Discover " + contract.name + " Ethereum's token users information on DAppBoard analytics tool.",
      title: "DAppBoard " + contract.name + " token users information on Ethereum.",
      contracts: {
        nav: 'token_users',
        contract: contract,
      },
    }));
  },

  nfts: async function(req, res) {
    var contract = await sails.helpers.contracts.get.with({"address": req.params['address']});
    if (contract == null) {
      return res.notFound();
    }
    return (res.view('contracts/token_nfts', {
      description: "Discover " + contract.name + " Ethereum's non fungible token information on DAppBoard analytics tool.",
      title: "DAppBoard " + contract.name + " NFT information on Ethereum.",
      contracts: {
        nav: 'token_nfts',
        contract: contract,
      },
    }));
  },
}
