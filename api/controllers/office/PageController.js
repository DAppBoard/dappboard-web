module.exports = {

  index: function(req, res) {
    return (res.view('office/home', {
      office: {
        nav: 'home',
      }
    }));
  }

}
