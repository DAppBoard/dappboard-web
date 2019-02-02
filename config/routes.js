/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'main/PageController.index',
  '/contact': 'main/PageController.contact',
  '/iwantadashboard': 'main/PageController.iwantadashboard',

  '/office': 'office/PageController.index',
  '/office/tokens': 'office/PageController.tokens',

  '/office/tokens/list': 'office/TokenController.list',
  'post /office/tokens/:address/update': 'office/TokenController.update',

  //tokens
  '/tokens': 'tokens/TokenController.list_tokens',
  '/nfts': 'tokens/TokenController.list_nfts',
  '/contract/:address/token/users': 'contracts/TokenController.users',
  '/contract/:address/token/nfts': 'contracts/TokenController.nfts',
  '/contract/:address/token': 'contracts/TokenController.index',
  '/contract/:address/events': 'contracts/ContractController.events',

  //dapps

  //ZRX 0x protocol
  '/dapp/0x': 'dapps/ZrxController.index',
  '/api/dapp/0x/pairs': 'dapps/ZrxController.pairs',
  '/api/dapp/0x/daily': 'dapps/ZrxController.dailyActivity',

  //Compound
  '/dapp/compound': 'dapps/CompoundController.index',
  '/api/dapp/compound/activity': 'dapps/CompoundController.activity',
  '/api/dapp/compound/daily': 'dapps/CompoundController.dailyActivity',
  '/api/dapp/compound/distribution/token': 'dapps/CompoundController.distributionActivityToken',

  //Bounties Network
  '/dapp/bounties': 'dapps/BountiesController.index',
  '/dapp/bounties/bounty/:bounty_id': 'dapps/BountiesController.bounty',
  '/api/dapp/bounties/activity': 'dapps/BountiesController.activity',
  '/api/dapp/bounties/activity/:bounty_id': 'dapps/BountiesController.activityBounty',
  '/api/dapp/bounties/daily': 'dapps/BountiesController.dailyActivity',
  '/api/dapp/bounties/fulfillers': 'dapps/BountiesController.fullfillers',

  // PUBLIC API
  '/api/tokens/list/:type': 'tokens/TokenController.list',
  '/api/tokens/list': 'tokens/TokenController.list',
  '/api/tokens/:token/daily': 'tokens/TokenController.daily',
  '/api/tokens/:token/nfts': 'tokens/TokenController.nfts',
  '/api/tokens/:token/users': 'tokens/TokenController.users',
  '/api/events/:address/types': 'contracts/ContractController.types',




};
