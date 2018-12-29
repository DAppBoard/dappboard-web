module.exports = {

  index: async function(req, res) {
    var tokens = await sails.helpers.tokens.listSummaryTop.with({type: "token"});
    var nfts = await sails.helpers.tokens.listSummaryTop.with({type: "nft"});
    var stables = await sails.helpers.tokens.listSummaryTop.with({type: "stable"});
    console.log(tokens)
    return (res.view('pages/homepage', {
      main: {
        nav: 'home',
      },
      tokens: tokens,
      nfts: nfts,
      stables: stables,

    }));
  },


}
