parasails.registerComponent('zrx_trading_pair', {

  props: [
    'sym1',
    'name1',
    'address1',
    'sym2',
    'name2',
    'address2',
  ],

  data: function() {
    return {
    };
  },

  template: `
  <center class="columns">
    <a :href="address1 | contractAddress" class="column">
    <strong>{{sym1}}</strong><br>
      {{name1}}
    </a>
    <a :href="address2 | contractAddress" class="column">
    <strong>{{sym2}}</strong><br>
    {{name2}}

    </a>
    </center>
  `,

  beforeMount: function() {
  },
  mounted: async function() {

  },
  beforeDestroy: function() {

  },

  filters: {
    getAddress: function(value) {
      return ("https://raw.githubusercontent.com/TrustWallet/tokens/master/tokens/0x" + value.toLowerCase() + ".png");
    },
    contractAddress: function(value) {
      return "/contract/" + value + "/token";
    }
  },
  watch: {
    address: function(val) {
      this.loaded = false;
    },
  },
  methods: {
    load: function(a, b) {
      console.log("load", a, b)
      this.loaded = true;
    }
  }
});
