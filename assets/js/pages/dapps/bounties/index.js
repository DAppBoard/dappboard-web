parasails.registerPage('page_dapp_bounties', {

  data: {
    columns: [
      'timestamp',
      'bounty_id',
      'type',
    ],
    options: {
      filterable: false,
      perPageValues: [25, 50, 100, 500],
      perPage: 25,
      headings: {
        'timestamp': 'Date',
        'bounty_id': 'Bounty',
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
