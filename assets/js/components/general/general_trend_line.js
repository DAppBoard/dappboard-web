parasails.registerComponent('general_trend_line', {

  props: [
    'data',
    'days',
    'data_key',
  ],

  data: function() {
    return {
      cols: []
    };
  },

  template: `
  <div >
  <trend
  :data="cols"
  :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
  auto-draw
  smooth
  style=" height: 40px;">
  </trend>
  </div>
  `,

  beforeMount: function() {
    this.loadData()
  },
  mounted: async function() {

  },
  beforeDestroy: function() {

  },

  computed: {
  },


  filters: {

  },
  watch: {
    data: function() {
      console.log("dataChanged")
      this.loadData()
    }
  },
  methods: {
    getDay: function(day) {
      for (var d of this.data) {
        if (d.day == day) {
          return d[this.data_key];
        }
      }
      return 0;
    },
    loadData: function() {
      console.log(moment)
      console.log(moment())
      var start = moment().add(- this.days, 'days');
      while(this.cols.length > 0) {this.cols.pop();}
      for (var i = 0; i <this.days; i++) {
        start = start.add(1, 'days');
        this.cols.push(this.getDay(start.format('YYYY-MM-DD')));
      }
      console.log(this.cols)
    }
  }
});
