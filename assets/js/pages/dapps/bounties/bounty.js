parasails.registerPage('page_dapp_bounties_bounty', {

  data: {
    columns: [
      'timestamp',
      'type',
      'transaction_hash',
    ],
    options: {
      filterable: false,
      perPageValues: [25, 50, 100, 500],
      perPage: 25,
      headings: {
        'timestamp': 'Date',
        'transaction_hash': 'Transaction',
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
