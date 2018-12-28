module.exports = {

  friendlyName: 'Get all the tokens',
  description: 'Return the list of the tokens.',

  inputs: {
  },

  fn: async function(inputs, exits) {
    var knex = await sails.helpers.db.getknex();
    var base = knex.select('*').from('token_transfers_summary');
    var addresses = [
      '9f8f72aa9304c8b593d555f12ef6589cc3a579a2'.toLowerCase(), // Maker
      'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'.toLowerCase(), // USDCoin
      'd26114cd6EE289AccF82350c8d8487fedB8A0C07'.toLowerCase(), // OMG
      'e41d2489571d322189246dafa5ebde1f4699f498'.toLowerCase(), // ZRX
      '0d8775f648430679a709e98d2b0cb6250d2887ef'.toLowerCase(), // BAT
      '05f4a42e251f2d52b8ed15e9fedaacfcef1fad27'.toLowerCase(), // Ziliqa
      '1985365e9f78359a9B6AD760e32412f4a445E862'.toLowerCase(), // REP
      'b63b606ac810a52cca15e44bb630fd42d8d1d83d'.toLowerCase(), // MCO
      '89d24a6b4ccb1b6faa2625fe562bdd9a23260359'.toLowerCase(), // DAI
      'a74476443119A942dE498590Fe1f2454d7D4aC0d'.toLowerCase(), // GOLEM
      '1f573d6fb3f13d689ff844b4ce37794d79a7ff1c'.toLowerCase(), // Bancor
      'B97048628DB6B661D4C2aA833e95Dbe1A905B280'.toLowerCase() // TENX
    ];
    for (var address of addresses) {
      base.orWhere('address', address)
    }
    base.orderBy(knex.raw('RANDOM()'));
    var results = await sails.helpers.db.execute(base.toString());
    return exits.success(results.rows);
  }

};
