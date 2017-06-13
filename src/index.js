const express = require('express');
const mustacheExpress = require('mustache-express');
const config = require('./config');
const passport = require('passport');
const token = require('./token');
require('./authentication/jwt');
require('./authentication/google');
require('./authentication/facebook');

// Generate the Token for the user authenticated in the request
function generateUserToken(req, res) {
    const accessToken = token.generateAccessToken(req.user.id);
    res.render('authenticated.html', {
        token: accessToken
    });
}

const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/public');

app.use(passport.initialize());

app.use(express.static('src/public'));

app.get('/api/authentication/google/start',
    passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));
app.get('/api/authentication/google/redirect',
    passport.authenticate('google', { session: false }),
    generateUserToken);

app.get('/api/authentication/facebook/start',
    passport.authenticate('facebook', { session: false }));
app.get('/api/authentication/facebook/redirect',
    passport.authenticate('facebook', { session: false }),
    generateUserToken);

app.get('/api/insecure', (req, res) => {
    res.send('Insecure response');
});

app.get('/api/secure',
    passport.authenticate(['jwt'], { session: false }),
    (req, res) => {
        res.send('Secure response from ' + JSON.stringify(req.user));
    });

const port = config.get('http.port');
app.listen(port, () => {
    console.log('Server listening on port ' + port);

    console.log('JWT for demo: ' + token.generateAccessToken(0));
});
