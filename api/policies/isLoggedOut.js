module.exports = function(req, res, next) {

  // User is allowed to proceed to the next policy,
  // or if this is the last policy, the controller
  if (!req.session.userId) {
    return next();
  }

  if (req.wantsJSON) {
    return res.json('Pokemon');
  }

  return res.redirect('/');
};
