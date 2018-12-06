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
  '/tokens': 'tokens/TokenController.tokens',
  '/nfts': 'tokens/TokenController.nfts',

  // PUBLIC API
  '/api/tokens/list': 'tokens/TokenController.list',

};
