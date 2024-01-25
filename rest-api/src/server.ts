import * as express from 'express';
import { root } from './routes/root';
import { isInteger } from './utils';

const app = express();

const setupExpress = () => {
  app.route('/').get(root);
};

const startServer = () => {
  const portArg = process.argv[2];
  let port;
  if (isInteger(portArg)) {
    port = parseInt(portArg);
  }

  if (!port) {
    port = 9000;
  }
  app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`);
  });
};

setupExpress();
startServer();
