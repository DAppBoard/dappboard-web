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
  <a target="_blank" :href="bounty_id | makeLink" >
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
      return ("https://explorer.bounties.network/bounty/" + value);
    },

  },

  methods: {


  }
});
