module.exports = {

  index: async function(req, res) {
    var c = await sails.helpers.tokens.list()
    return (res.view('office/home', {
      office: {
        nav: 'home',
      }
    }));
  }

}
