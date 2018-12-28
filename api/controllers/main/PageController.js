module.exports = {

  index: async function(req, res) {
    var tokens = await sails.helpers.tokens.listSummaryTop.with({});
    console.log(tokens)
    return (res.view('pages/homepage', {
      main: {
        nav: 'home',
      },
      tokens: tokens,
    }));
  },


}
