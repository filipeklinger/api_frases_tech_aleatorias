import express = require('express'); //Import the express dependency
import { errorHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/requestLogger';
import router from './routes/routes';
const app = express();
const port = 3000;

app.use(express.json());
app.use(requestLogger);
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});