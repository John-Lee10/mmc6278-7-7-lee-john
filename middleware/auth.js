function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	// If the user is logged in, call next()
	// If the user is not logged in, redirect to /login
	if (req.session && req.session.isLoggedIn) {
		return next()
	}
	res.redirect('/login')
}

module.exports = checkAuth
