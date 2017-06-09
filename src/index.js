const express = require('express');
const config = require('./config');

const app = express();
app.use(express.static('src/public'));

const port = config.get('http.port');
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
