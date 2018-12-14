parasails.registerPage('contracts-token-page', {

  data: {
    columns: [],
    chart: {},
    chartHeight: 270,
    startDate: moment().subtract(7, 'days'),
    endDate: moment().subtract(1, 'days'),
    c_holders: null,
    c_volume: null,
    c_transfers: null,
  },

  beforeMount: function() {
    console.log('before monted')
  },

  mounted: function() {
    console.log("Successfully mounted");
    this.refreshGraph();
    var ctxo = this;
    $('#tokendaterange').daterangepicker({
      "opens": "left",
      //"autoApply": true,
      ranges: {
        'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
        'Last 30 Days': [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
        'Last 90 Days': [moment().subtract(90, 'days'), moment().subtract(1, 'days')],
      },
      "alwaysShowCalendars": true,
      "startDate": ctxo.startDate,
      "endDate": ctxo.endDate,

    }, function(start, end, label) {

      ctxo.startDate = start;
      ctxo.endDate = end;
      ctxo.refreshGraph();

    });
  },

  methods: {
    refreshGraph: function() {
      var ctx = this;
      $.get('/api/tokens/' + SAILS_LOCALS.contracts.contract.address + '/daily', function(res) {
        console.log(ctx);
        while (ctx.columns.length > 0) {
          ctx.columns.pop();
        }
        var results = HELPERS.normalizeTimeSerie(ctx.startDate, ctx.endDate, res);
        for (k in results) {
          ctx.columns.push(results[k]);
        }
        if (ctx.c_volume != null) {
          ctx.c_volume.destroy();
        }
        if (ctx.c_holders != null) {
          ctx.c_holders.destroy();
        }
        if (ctx.c_transfers != null) {
          ctx.c_transfers.destroy();
        }
        var c1 = $('#token_chart_transfers')[0].getContext('2d');
        var c2 = $('#token_chart_holders')[0].getContext('2d');
        var c3 = $('#token_chart_volume')[0].getContext('2d');

        var options = {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
        }
        ctx.c_transfers = new Chart(c1, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
            labels: results.day,
            datasets: [{
              label: "Count of transfers",
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              data: results.transfers,
            }]
          },

          // Configuration options go here
          options: options
        });

        ctx.c_holders = new Chart(c2, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
            labels: results.day,
            datasets: [{
                label: "Senders",
                backgroundColor: 'rgba(99, 255, 132, 0)',
                borderColor: 'rgb(255, 99, 132)',
                data: results.senders,
              },
              {
                label: "Receivers",
                backgroundColor: 'rgba(99, 255, 132, 0)',
                borderColor: 'rgb(99, 255, 132)',
                data: results.receivers,
              }
            ]
          },

          // Configuration options go here
          options: options
        });

        if (SAILS_LOCALS.contracts.contract.is_erc20) {
          options.scales = {
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
          ctx.c_volume = new Chart(c3, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
              labels: results.day,
              datasets: [{
                label: "Total volume",
                backgroundColor: 'rgba(99, 255, 132, 0)',
                borderColor: 'rgb(255, 99, 132)',
                yAxisID: 'y-axis-1',
                data: results.erc20_volume,
              },
              {
                label: "Average size of a transfer",
                backgroundColor: 'rgba(99, 255, 132, 0)',
                borderColor: 'rgb(99, 255, 132)',
                yAxisID: 'y-axis-2',
                data: results.erc20_average,
              }]
            },

            // Configuration options go here
            options: options
          });


        }
        if (SAILS_LOCALS.contracts.contract.is_erc721) {
          ctx.c_volume = new Chart(c3, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
              labels: results.day,
              datasets: [{
                label: "Total volume",
                backgroundColor: 'rgba(99, 255, 132, 0)',
                borderColor: 'rgb(255, 99, 132)',
                data: results.nft_distincts,
              }]
            },

            // Configuration options go here
            options: options
          });
        }

      })
    }

  }
});
