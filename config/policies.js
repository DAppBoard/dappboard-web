/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

var auth = require('http-auth');
var u = process.env.DAPPBOARD_OFFICE_USER;
var p = process.env.DAPPBOARD_OFFICE_PW;

var officeAuth = auth.basic({
}, function(username, password, onwards) {
  return onwards(username === u  && password === p);
});

module.exports.policies = {

  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/

  // '*': true,
  'office/*' : auth.connect(officeAuth),
};
