const express = require('express'); //Import the express dependency
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('GET request to homepage')
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});