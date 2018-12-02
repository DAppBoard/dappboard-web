parasails.registerComponent('office_token_edit', {

  props: [
    'address',
    'name',
    'symbol',
    'is_erc20',
    'is_erc721'
  ],

  data: function (){
    return {
      token: {
        address: this.address,
        name: this.name,
        symbol: this.symbol,
        is_erc20: this.is_erc20,
        is_erc721: this.is_erc721,
      }
    };
  },

  template: `
    <div style="margin:10px;">
    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input class="input" v-model="token.address" disabled>
      </div>
    </div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" v-model="token.name" >
      </div>
    </div>
    <div class="field">
      <label class="label">Symbol</label>
      <div class="control">
        <input class="input" v-model="token.symbol">
      </div>
    </div>
    <input type="checkbox" id="erc20" v-model="token.is_erc20">
    <label for="erc20">ERC20</label>
    <input type="checkbox" id="erc721" v-model="token.is_erc721">
    <label for="checkbox">ERC721 (NFT)</label>
    <hr>
    <a class="button" v-on:click="submit">Save</a>
    </div>
  `,

  beforeMount: function() {

  },

  mounted: async function(){

  },

  beforeDestroy: function() {

  },

  filters: {

  },

  methods: {
    submit: function() {

    }

  }
});
