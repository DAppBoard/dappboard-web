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

  '/': { view: 'pages/homepage' },

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

  // PUBLIC API
  '/api/tokens/list/:type': 'tokens/TokenController.list',
  '/api/tokens/list': 'tokens/TokenController.list',
  '/api/tokens/:token/daily': 'tokens/TokenController.daily',
  '/api/tokens/:token/nfts': 'tokens/TokenController.nfts',
  '/api/tokens/:token/users': 'tokens/TokenController.users',


};
