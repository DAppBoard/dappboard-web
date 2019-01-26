parasails.registerComponent('bounty-link', {

  props: [
    'bounty_id'
  ],

  data: function (){
    return {
      //…
    };
  },

  template: `
  <a :href="bounty_id | makeLink" >
  {{bounty_id}}
  </a>
  `,

  beforeMount: function() {

  },
  mounted: async function(){

  },
  beforeDestroy: function() {

  },

  filters: {
    makeLink: function(value) {
      return ("/dapp/bounties/bounty/" + value);
    },

  },

  methods: {


  }
});
