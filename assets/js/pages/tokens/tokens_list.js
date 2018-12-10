parasails.registerPage('tokens-list', {
  data: {
    columns: [
      'name',
      'transfers',
      'transfers_today',
      'receivers_today',
      'senders_today'
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
        base: 'fas',
        up: 'fa-chevron-up',
        down: 'fa-chevron-down',
        is: 'fa-sort'
      }
    },
  },
  props: ['currentPeriod'],

  beforeMount: function() {
    console.log('before monted')
    console.log(this)
    console.log(window)

  },

  mounted: function() {
    console.log("Successfully mounted")

  },

  methods: {

  }
});
