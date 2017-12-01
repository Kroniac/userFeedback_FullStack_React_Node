//if (process.env.NODE_ENV === 'production') {
  //we are in the production mode
  //module.exports = require('./prod');
//} else {
  // we are in  the development mode- return the dev keys
  module.exports = require('./dev');
//}
