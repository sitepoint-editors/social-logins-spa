const express = require('express');
const config = require('./config');
const passport = require('passport');
const token = require('./token');
require('./authentication/jwt');
require('./authentication/google');

// Generate the Token for the user authenticated in the request
function generateUserToken(req, res) {
    const accessToken = token.generateAccessToken(req.user.id);
    res.json(accessToken);
}

const app = express();
app.use(passport.initialize());

app.use(express.static('src/public'));

app.get('/api/authentication/google/start',
    passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));
app.get('/api/authentication/google/redirect',
    passport.authenticate('google', { session: false }),
    generateUserToken);

app.get('/api/insecure', (req, res) => {
    res.send('Insecure response');
});

app.get('/api/secure',
    passport.authenticate(['jwt'], { session: false }),
    (req, res) => {
        res.send('Secure response');
    });

const port = config.get('http.port');
app.listen(port, () => {
    console.log('Server listening on port ' + port);

    console.log('JWT for demo: ' + token.generateAccessToken(0));
});
