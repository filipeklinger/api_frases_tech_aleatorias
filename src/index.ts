import express = require('express'); //Import the express dependency
import router from './routes/routes';
const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});