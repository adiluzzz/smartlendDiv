module.exports.bootstrap = function(cb) {
  var FixtureBootstrapper = require('../fixtures');
  return FixtureBootstrapper(cb);
};
