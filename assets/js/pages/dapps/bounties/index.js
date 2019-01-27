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
    },
    data_fulfillers: {
      columns: [
        'address',
        'count',
      ],
      options_fulfillers: {
        filterable: false,
        perPageValues: [10, 25, 50, 100, 500],
        perPage: 10,
        headings: {
          'address': 'Address',
          'count': 'Fulfilled bounties',
        }
      }
  },

  beforeMount: function() {
    console.log('before monted')
  },

  mounted: function() {
    console.log("Successfully mounted")
    this.refreshGraph()
  },

  methods: {
    refreshGraph: function() {
      var ctx = this;
      $.get('/api/dapp/bounties/daily', function(res) {
        var results = HELPERS.normalizeTimeSerie(moment().subtract(90, 'days'), moment(), res);
        console.log(results)
        var c1 = $('#dapp_bounties_network_daily')[0].getContext('2d');
        var opt = {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
        }
        ctx.c_transfers = new Chart(c1, {
          // The type of chart we want to create
          type: 'bar',

          // The data for our dataset
          data: {
            labels: results.day,
            datasets: [{
              type: 'line',
                label: "Bounties completed",
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: results.fullfilment_accepted,
                fill: false,
              },
              {
                label: "Bounties created",
                backgroundColor: '#64b5f680',
                borderColor: '#64b5f6',
                data: results.bounty_activated,
              }
            ]
          },

          // Configuration options go here
          options: opt
        });

      });
    }
  }
});
