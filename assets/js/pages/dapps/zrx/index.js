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
    this.refreshGraph();
  },

  methods: {
    refreshGraph: function() {
      var ctx = this;
      $.get('/api/dapp/0x/daily', function(res) {
        var results = HELPERS.normalizeTimeSerie(moment().subtract(90, 'days'), moment(), res);
        console.log(results)
        var c1 = $('#dapp_0x_daily_chart')[0].getContext('2d');
        var opt = {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            yAxes: [{
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-1',
            }, {
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnChartArea: false
              }
            }],
          }
        }
        ctx.c_transfers = new Chart(c1, {
          // The type of chart we want to create
          type: 'bar',

          // The data for our dataset
          data: {
            labels: results.day,
            datasets: [{
              type: 'line',
                label: "Count of trades",
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: results.trades,
                yAxisID: 'y-axis-1',
                fill: false,
              },
              {
                label: "Count of pairs",
                backgroundColor: '#64b5f680',
                borderColor: '#64b5f6',
                data: results.pairs,
                yAxisID: 'y-axis-2',
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
