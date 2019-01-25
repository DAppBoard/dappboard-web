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
    this.refreshGraph();
  },

  methods: {
    refreshGraph: function() {
      var ctx = this;
      $.get('/api/dapp/compound/daily', function(res) {
        var results = HELPERS.normalizeTimeSerie(moment().subtract(90, 'days'), moment(), res);
        console.log(results)
        var c1 = $('#dapp_compound_daily_chart')[0].getContext('2d');
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
                label: "Borrows",
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: results.borrows,
                yAxisID: 'y-axis-1',
                fill: false,
              },
              {
                type: 'line',
                  label: "Repays",
                  backgroundColor: 'rgba(99, 99, 245, 0.2)',
                  borderColor: 'rgb(99, 99, 245)',
                  data: results.repays,
                  yAxisID: 'y-axis-1',
                  fill: false,
                },
              {
                label: "Borrowers",
                backgroundColor: '#aed58180',
                borderColor: '#aed581',
                data: results.borrowers,
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
