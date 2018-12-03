parasails.registerPage('office-tokens', {

  data: {
    columns: [
      'name',
      'symbol',
      'address',
      'is_erc20',
      'is_erc721',
      'decimals'
    ],
    options: {
      filterByColumn: true,
      uniqueKey: 'address',
      perPageValues: [25, 50, 100, 500, 1000],
      perPage: 25,
      saveState: true,
      pagination: {
        edge: true,
      },
      sortIcon: {
        base: 'fas fa-home',
        up: 'glyphicon-chevron-up',
        down: 'glyphicon-chevron-down',
        is: 'glyphicon-sort'
      }
    },
  },

  beforeMount: function() {
    console.log('before monted')
    console.log(this)
  },

  mounted: function() {
    console.log("Successfully mounted")
    var ctx = this;

  },

  methods: {

  }
});
