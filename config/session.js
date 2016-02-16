/**
 * Session Configuration
 * (app.config.session)
 *
 * @see http://trailsjs.io/doc/config/session.js
 */
//const key = require('../config/local').jwtKey;
const key = 'Jbl0n8f0ke0AJcFNIc6XlO8sIs5eFwy1FztnwnscoXEQjn7Vk9tqqF0IVdCnWoz';

module.exports = {

  /**
   * Define the session implementation, e.g. 'jwt' or 'cookie'
   */
  strategy: 'jwt',

  /**
   * Define jwt-specific options
   */
  jwt: {
    secret: key,
    connection: 'localStorage',
    model: 'WebToken'
  },

  /**
   * Define cookie-specific options
   */
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }

};
