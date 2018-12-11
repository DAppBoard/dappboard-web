parasails.registerComponent('contracts_image', {

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
  <a :href="address | contractAddress" style=" display: flex;
   align-items:center;">
    <div style="margin-left: 10px; margin-right: 10px;" >
    <img v-show="loaded" @load="load" :src="address | getAddress" class="token_image" v-bind:style="{ width: size + 'px', height: size + 'px', backgroundColor: 'transparent' }">
    </img>
    <img v-show="!loaded"  src="/images/token_placeholder.png" class="token_image" v-bind:style="{ width: size + 'px', height: size + 'px', backgroundColor: 'transparent' }">
    </img>
    </div>
    <div style="display: inline;" >
      <div>
     <strong>{{ name }}</strong> - {{symbol}}
     </div>
    </div>
  </a>
  `,

  beforeMount: function() {

  },
  mounted: async function() {

  },
  beforeDestroy: function() {

  },

  filters: {
    getAddress: function(value) {
      return ("https://github.com/TrustWallet/tokens/raw/master/images/0x" + value.toLowerCase() + ".png");
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
