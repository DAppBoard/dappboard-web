parasails.registerComponent('address_etherscan_link', {

  props: [
    'address'
  ],

  data: function (){
    return {
      //…
    };
  },

  template: `
  <a target="_blank" :href="address | makeLink" class="tooltip is-tooltip-right" :data-tooltip="address | humanHash">
  {{address | hashBeautify}}
  </a>
  `,

  beforeMount: function() {

  },
  mounted: async function(){

  },
  beforeDestroy: function() {

  },

  filters: {
    hashBeautify: function (string) {
        var midpoint = Math.ceil(string.length / 2);
        var toremove = string.length - 8;
        var lstrip = Math.ceil(toremove/2);
        var rstrip = toremove - lstrip;
        return (string.substring(0, midpoint-lstrip) + '...'
          + string.substring(midpoint+rstrip));
    },
    makeLink: function(value) {
      return ("https://etherscan.io/address/0x" + value);
    },
    humanHash: function(value) {
      return ("0x" + value)
    }
  },

  methods: {


  }
});
