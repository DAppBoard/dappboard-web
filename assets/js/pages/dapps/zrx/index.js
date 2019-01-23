parasails.registerPage('page_dapp_zrx', {

  data: {
    columns: [
      'fname',
      'fsym',
      'count_of_trades',
      'count_of_traders',
      'count_of_relayers',
    ],
    options: {
      
    }
  },

  beforeMount: function() {
    console.log('before monted')
  },

  mounted: function() {
    console.log("Successfully mounted")
  },

  methods: {

  }
});
