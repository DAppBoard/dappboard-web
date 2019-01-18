parasails.registerComponent('contract_icon', {

  props: [
    'address',
    'name',
  ],

  data: function() {
    return {
      loaded: false,
    };
  },

  template: `
  <center>
    <div >
      <img v-show="loaded" @load="load" :src="address | getAddress" class="token_image" style="width: 20%; height: 20%; backgroundColor: transparent;">
      </img>
      <img v-show="!loaded"  src="/images/token_placeholder.png" class="token_image" style="width: 20%; height: 20%; backgroundColor: transparent;">
      </img>
    </div>
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
