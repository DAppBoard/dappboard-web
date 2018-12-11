module.exports = {

  index: async function(req, res) {
    return (res.view('contracts/token', {
      contracts: {
        nav: 'token',
      }
    }));
  },


}
