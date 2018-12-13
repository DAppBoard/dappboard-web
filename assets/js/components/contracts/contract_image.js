parasails.registerComponent('contract_image', {

  props: [
    'address',
    'name',
    'tags',
  ],

  data: function() {
    return {
      loaded: false,
    };
  },

  template: `
  <center>
    <a :href="address | contractAddress" style=" ">
    <div style="margin-left: 10px; margin-right: 10px;" >
      <img v-show="loaded" @load="load" :src="address | getAddress" class="token_image" style="width: 20%; height: 20%; backgroundColor: transparent;">
      </img>
      <img v-show="!loaded"  src="/images/token_placeholder.png" class="token_image" style="width: 20%; height: 20%; backgroundColor: transparent;">
      </img>
    </div>
    <div style="" >
      <div>
        <strong>{{ name }}</strong>
      </div>
    </div>
    </a>
      <div class="" style="margin-top: 10px;">
     <span style="margin:2px;" class="tag is-light" v-for="item in tags">
      {{ item }}
      </span>
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
