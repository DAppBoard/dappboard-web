parasails.registerComponent('from-now', {

  props: [
    'timestamp'
  ],

  data: function (){
    return {
      //…
    };
  },

  template: `
  <p>
  {{timestamp | fromNow}}
  </p>
  `,

  beforeMount: function() {

  },
  mounted: async function(){

  },
  beforeDestroy: function() {

  },

  filters: {
    fromNow: function (timestamp) {
      return moment.utc(timestamp).fromNow()
    },

  },

  methods: {


  }
});
