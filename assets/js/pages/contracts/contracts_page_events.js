parasails.registerPage('contracts-page-events', {

  data: {
    startDate: moment().subtract(7, 'days'),
    endDate: moment().subtract(1, 'days'),
    events_name: [],
    events_topic: [],
    events_count: [],
    events_color: [],
    c_daily: null,
    c_distribution: null,
    events: [],
    loading:true,
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
    toggle: function(index) {
      console.log(this.events[index].visible)
      Vue.set(this.events[index], 'visible', !this.events[index].visible);
      console.log(this.events[index].visible)
      this.c_daily.data.datasets[index].hidden = !this.events[index].visible;
      this.c_daily.update();
      this.c_distribution.getDatasetMeta(0).data[index].hidden = !this.events[index].visible;
      this.c_distribution.update();
    },
    refreshGraph: function() {
      var ctxo = this;
      this.loading = true;
      $.get('/api/events/' + SAILS_LOCALS.contracts.contract.address + '/types', {
        startdate: ctxo.startDate.format('YYYY-MM-DD'),
        enddate: ctxo.endDate.format('YYYY-MM-DD'),
      }, function(res) {
        ctxo.loading = false;
        if (ctxo.c_daily != null) {
          ctxo.c_daily.destroy();
        }
        if (ctxo.c_distribution != null) {
          ctxo.c_distribution.destroy();
        }
        console.log(res)
        var colorHash = new ColorHash();
        var datasets = [];
        var days = HELPERS.normalizeTimeSerie(ctxo.startDate, ctxo.endDate, res.days);
        ctxo.events_name = [];
        ctxo.events_topic = [];
        ctxo.events_count = [];
        ctxo.events_color = [];
        ctxo.events = [];
        var i = 0;
        for (var e of res.events) {
          ctxo.events_name.push(e.name);
          ctxo.events_topic.push(e.topic_0);
          ctxo.events_count.push(e.count);
          ctxo.events_color.push(colorHash.hex(e.topic_0))
          ctxo.events.push({
            name: e.name,
            topic_0: e.topic_0,
            count: e.count,
            color: colorHash.hex(e.topic_0),
            index: i++,
            visible: true,
          })
          datasets.push({
            label: e.name,
            backgroundColor: colorHash.hex(e.topic_0),
            borderColor: colorHash.hex(e.topic_0),
            data: days[e.topic_0.substring(0, 63)],
          })
        }
        console.log(datasets)
        var c_daily = $('#contracts_events_timeline')[0].getContext('2d');
        ctxo.c_daily = new Chart(c_daily, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
            labels: days.day,
            datasets: datasets
          },

          // Configuration options go here
          options: {
            aspectRatio: 3.5,
            tooltips: {
              mode: 'index',
              intersect: false,
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        });

        var c_distribution = $('#contracts_events_donut')[0].getContext('2d');
        ctxo.c_distribution = new Chart(c_distribution, {
          // The type of chart we want to create
          type: 'doughnut',
          options: {
            legend: {
              display: false
            },
          },
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


  }
});
