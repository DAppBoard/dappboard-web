parasails.registerPage('contracts-token-page-users', {

  data: {
    startDate: moment().subtract(7, 'days'),
    endDate: moment().subtract(1, 'days'),
    c_users: {},
    columns: [
      'address',
      'transfers',
    ],
    options: {
      params: {
        startDate: moment().subtract(7, 'days').format('YYYY/MM/DD HH:mm:ss'),
        endDate: moment().subtract(1, 'days').format('YYYY/MM/DD HH:mm:ss'),
      },
      filterable: false,
      uniqueKey: 'address',
      perPageValues: [15, 25, 50, 100, 500],
      perPage: 15,
      saveState: true,
      pagination: {
        edge: true,
      },
      orderBy: {
        ascending: false,
        column: 'transfers',
      },
      sortIcon: {
        base: 'fas',
        up: 'fa-chevron-up',
        down: 'fa-chevron-down',
        is: 'fa-sort'
      },
      headings: {
        address: 'Address',
        transfers: 'Number of transfers',

      },
      headingsTooltips: {

      },

    },
  },


  beforeMount: function() {
    console.log('before monted')
  },

  mounted: function() {
    console.log("Successfully mounted");
    var ctxo = this;
    console.log(ctxo.options.params.startDate);
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
      Vue.set(ctxo.options.params, 'startDate', start.format('YYYY/MM/DD HH:mm:ss'))
      Vue.set(ctxo.options.params, 'endDate', end.format('YYYY/MM/DD HH:mm:ss'))
      ctxo.$refs.table.refresh()


    });
  },

  methods: {
    onLoaded: function(d) {
      console.log(d)
      console.log(this)
      var data = [];
      var labels = [];
      var total_left = parseInt(d.total)
      for (user of d.data) {
        data.push(user.transfers)
        labels.push(user.address)
        total_left -= parseInt(user.transfers)
      }
      data.push(total_left);
      labels.push('Others')
      var c1 = $('#chart_users')[0].getContext('2d');
      var ctxo = this;
      if (ctxo.c_users.destroy != null) {
        ctxo.c_users.destroy()
      }
      ctxo.c_users = new Chart(c1, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
          labels: labels,
          datasets: [{
            label: "Count of transfers",
            data: data,
          }]
        },

        // Configuration options go here
      //  options: options
      });

    }


  }
});
