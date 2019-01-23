parasails.registerPage('page_dapp_zrx', {

  data: {
    columns: [
      'fsym',
      'count_of_trades',
      'count_of_traders',
      'count_of_relayers',
    ],
    options: {
      filterable: false,
      perPageValues: [25, 50, 100, 500],
      perPage: 25,
      headings: {
         fsym: 'Token pair',
       }
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
