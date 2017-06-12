const express = require('express');
const config = require('./config');
const passport = require('passport');

const app = express();
app.use(passport.initialize());

app.use(express.static('src/public'));

app.get('/api/insecure', (req, res) => {
    res.send('Insecure response');
});

app.get('/api/secure', (req, res) => {
    res.send('Secure response');
});

const port = config.get('http.port');
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
