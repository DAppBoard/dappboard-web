parasails.registerPage('office-tokens', {

  data:{
        columns: [
          'name',
          'symbol',
          'address',
          'is_erc20',
          'is_erc721'
        ],
        options: {
          filterByColumn: true,
          uniqueKey: 'address',
        },
    },

  beforeMount: function() {
    console.log('before monted')
    console.log(this)
  },

  mounted:  function(){
    console.log("Successfully mounted")
    var ctx = this;

  },

  methods: {

  }
});
