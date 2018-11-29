module.exports = {

  list: async function(req, res) {
    return (res.view('office/home', {
      office: {
        nav: 'home',
      }
    }));
  }

}
