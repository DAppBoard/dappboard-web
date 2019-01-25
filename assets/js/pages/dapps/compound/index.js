parasails.registerPage('page_dapp_compound', {

  data: {
    columns: [
      'account',
      'name',
      'type',
      'amounts',
    ],
    options: {
      filterable: false,
      perPageValues: [10, 25, 50, 100, 500],
      perPage: 10,
      headings: {
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
