parasails.registerPage('page_dapp_compound', {

  data: {
    columns: [
      'timestamp',
      'account',
      'name',
      'type',
      'amounts',
    ],
    options: {
      filterable: false,
      perPageValues: [25, 50, 100, 500],
      perPage: 25,
      headings: {
        'type': 'Action',
        'amounts': 'Amount',
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
