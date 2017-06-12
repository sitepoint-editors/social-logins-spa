const jwt = require('jsonwebtoken');
const config = require('./config');

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
    const expiresIn = '1 hour';
    const audience = config.get('authentication.token.audience');
    const issuer = config.get('authentication.token.issuer');
    const secret = config.get('authentication.token.secret');

    const token = jwt.sign({}, secret, {
        expiresIn: expiresIn,
        audience: audience,
        issuer: issuer,
        subject: userId.toString()
    });

    return token;
}

module.exports = {
    generateAccessToken: generateAccessToken
}
