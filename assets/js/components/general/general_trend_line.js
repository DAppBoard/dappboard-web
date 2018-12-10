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
  style="width:300px;">
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
    loadData: function() {
      while(this.cols.length > 0) {this.cols.pop();}
      for (var d of this.data) {
        this.cols.push(d[this.data_key])
      }
    }
  }
});
