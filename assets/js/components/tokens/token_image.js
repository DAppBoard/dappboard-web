parasails.registerComponent('token_image', {

  props: [
    'address',
    'name',
    'size'
  ],

  data: function() {
    return {
      loaded: false,
    };
  },

  template: `
  <div>
    <img v-show="loaded" @load="load" :src="address | getAddress" class="token_image" v-bind:style="{ width: size + 'px', height: size + 'px', backgroundColor: 'transparent' }">
    </img>
    <img v-show="!loaded"  src="/images/token_placeholder.png" class="token_image" v-bind:style="{ width: size + 'px', height: size + 'px', backgroundColor: 'transparent' }">
    </img>
  </div>
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