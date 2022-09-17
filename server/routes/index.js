const authRoutes = require('./auth');
const groupsRoutes = require('./groups');

module.exports = function(app, db) {
  authRoutes(app, db);
  groupsRoutes(app, db);
};