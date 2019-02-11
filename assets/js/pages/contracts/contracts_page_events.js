parasails.registerPage('contracts-page-events', {

  data: {
    startDate: moment().subtract(7, 'days'),
    endDate: moment().subtract(1, 'days'),
    events_name: [],
    events_topic: [],
    events_count: [],
    events_color: [],
  },

  beforeMount: function() {
    console.log('before monted')
  },

  mounted: function() {
    console.log("Successfully mounted");
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
      Vue.set(ctxo, 'startDate', start)
      Vue.set(ctxo, 'endDate', end)
      ctxo.refreshGraph();
    });
    this.refreshGraph();
  },

  methods: {
    refreshGraph: function() {
      var ctxo = this;
      $.get('/api/events/' + SAILS_LOCALS.contracts.contract.address + '/types', {
        startdate: ctxo.startDate.format('YYYY-MM-DD'),
        enddate: ctxo.endDate.format('YYYY-MM-DD'),
      }, function(res) {
        var colorHash = new ColorHash();
        for (var e of res.events) {
          ctxo.events_name.push(e.name);
          ctxo.events_topic.push(e.topic_0);
          ctxo.events_count.push(e.count);
          ctxo.events_color.push(colorHash.hex(e.topic_0))

        }
        var c1 = $('#contracts_events_donut')[0].getContext('2d');
        ctxo.c_users = new Chart(c1, {
          // The type of chart we want to create
          type: 'doughnut',

          // The data for our dataset
          data: {
            labels: ctxo.events_name,
            datasets: [{
              label: "Count of transfers",
              data: ctxo.events_count,
              backgroundColor: ctxo.events_color,
            }]
          },

          // Configuration options go here
          //  options: options
        });
      });
    },
    onLoaded: function(d) {
      var data = [];
      var labels = [];
      var backgroundColors = [];
      var colorHash = new ColorHash();
      var total_left = parseInt(d.total)
      for (nft of d.data) {
        data.push(nft.transfers)
        labels.push(nft.nft)
        backgroundColors.push(colorHash.hex(nft.nft))
        total_left -= parseInt(nft.transfers)
      }
      data.push(total_left);
      labels.push('Others')
      var c1 = $('#chart_nfts')[0].getContext('2d');
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
            backgroundColor: backgroundColors,
          }]
        },

        // Configuration options go here
        //  options: options
      });

    }


  }
});
