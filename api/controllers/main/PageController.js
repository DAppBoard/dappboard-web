module.exports = {

  index: async function(req, res) {
    var tokens = await sails.helpers.tokens.listSummaryTop.with({type: "token"});
    var nfts = await sails.helpers.tokens.listSummaryTop.with({type: "nft"});
    var stables = await sails.helpers.tokens.listSummaryTop.with({type: "stable"});
    return (res.view('pages/homepage', {
      main: {
        nav: 'home',
      },
      tokens: tokens,
      nfts: nfts,
      stables: stables,

    }));
  },
  contact: async function(req, res) {
    return (res.view('pages/contact', {
      description: "Contact the DAppBoard team, we are eager to know your needs.",
      title: "DAppBoard | Contact us",
      main: {
        nav: 'contact',
      },
    }));
  },

}
