parasails.registerPage('contracts-token-page', {

  data: {
    columns: [],
    chart: {},
    chartHeight: 270,
  },

  beforeMount: function() {
    console.log('before monted')
  },

  mounted: function() {
    console.log("Successfully mounted");
    this.refreshGraph();
    var ctx = this;
    $('#tokendaterange').daterangepicker({
        "opens": "left",
        "autoApply": true,

    ranges: {
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'Last 90 Days': [moment().subtract(90, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "alwaysShowCalendars": true,

}, function(start, end, label) {
  ctx.refreshGraph();
  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});
  },

  methods: {
    refreshGraph: function() {
      var ctx = this;
      console.log(this)
      console.log(SAILS_LOCALS)
      $.get('/api/tokens/' + 'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' + '/daily', function(res) {
        console.log(res)
        while (ctx.columns.length > 0) {
          ctx.columns.pop();
        }
        var results = HELPERS.normalizeTimeSerie("2018-10-06", "2018-12-12", res);
        console.log(results)
        for (k in results) {
          console.log(k)
          ctx.columns.push(results[k]);
        }
        console.log(ctx.columns)
        var chart = c3.generate({
          bindto: '#token_chart',
          data: {
            x: 'day',
            columns: [ results.transfers, results.day]
          },
        size: {
          height: ctx.chartHeight,
        },
          axis: {
            x: {
              type: 'timeseries',
              // if true, treat x value as localtime (Default)
              // if false, convert to UTC internally
              localtime: false,
            }
          }
        });

        var chart = c3.generate({
          bindto: '#token_chart2',
          data: {
            x: 'day',
            columns: [ results.receivers, results.senders, results.day]
          },
          size: {
            height: ctx.chartHeight,
          },
          axis: {
            x: {
              type: 'timeseries',
              // if true, treat x value as localtime (Default)
              // if false, convert to UTC internally
              localtime: false,
            }
          }
        });

        var cl = [];
        if (SAILS_LOCALS.contracts.contract.is_erc20) {
          cl.push(results.erc20_volume, results.erc20_average)
        }
        if (SAILS_LOCALS.contracts.contract.is_erc721) {
          cl.push(results.nft_distincts)
        }
        cl.push(results.day)
        console.log(cl)
        var chart = c3.generate({
          bindto: '#token_chart3',
          data: {
            x: 'day',
            columns: cl,
          },
          size: {
            height: ctx.chartHeight,
          },          axis: {
            x: {
              type: 'timeseries',
              // if true, treat x value as localtime (Default)
              // if false, convert to UTC internally
              localtime: false,
            }
          }
        });
      })
    }

  }
});
