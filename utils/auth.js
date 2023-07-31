// function to redirect user to the login page if not already logged in
// used as middleware in routes
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;