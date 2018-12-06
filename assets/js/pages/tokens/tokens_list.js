parasails.registerPage('tokens-list', {
  data: {
    columns: [

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
      currentPeriod: null,
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
    this.currentPeriod = window.SAILS_LOCALS.currentPeriod;
    console.log('before monted')
    console.log(this)
    console.log(window)

  },

  mounted: function() {
    console.log("Successfully mounted")
    var ctx = this;
    this.columns.push('name')
    this.columns.push('symbol')
    this.columns.push('transfer_count_' + this.currentPeriod)
    this.columns.push('receiver_count_' + this.currentPeriod)
    this.columns.push('sender_count_' + this.currentPeriod)
  },

  methods: {

  }
});
