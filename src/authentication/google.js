const passport = require('passport');
const passportGoogle = require('passport-google-oauth');
const config = require('../config');
const users = require('../users');

const passportConfig = {
    clientID: config.get('authentication.google.clientId'),
    clientSecret: config.get('authentication.google.clientSecret'),
    callbackURL: 'http://localhost:3000/api/authentication/google/redirect'
};

if (passportConfig.clientID) {
    passport.use(new passportGoogle.OAuth2Strategy(passportConfig, function (request, accessToken, refreshToken, profile, done) {
        let user = users.getUserByExternalId('google', profile.id);
        if (!user) {
            user = users.createUser(profile.displayName, 'google', profile.id);
        }
        return done(null, user);
    }));
}
