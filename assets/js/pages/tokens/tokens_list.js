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
      },
      headings: {
         name: 'Token',
         transfers: 'Transfers (Week)',
         transfers_today: 'Transfers (Today)',
         receivers_today: 'Token receivers (Today)',
         senders_today: 'Token senders (Today)',

       },
       headingsTooltips: {
         name: TOOLTIPS.token,
         transfers: TOOLTIPS.token_transfer_count,
         transfers_today: TOOLTIPS.token_transfer_count,
         receivers_today: TOOLTIPS.token_transfer_receiver_count,
         senders_today: TOOLTIPS.token_transfer_sender_count,

       },

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
