module.exports = {

  index: async function(req, res) {
    return (res.view('office/home', {
      office: {
        nav: 'home',
      }
    }));
  },

  tokens: async function(req, res) {
    return (res.view('office/tokens', {
      office: {
        nav: 'tokens',
      }
    }));
  }

}
