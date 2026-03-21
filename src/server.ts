import { app } from './app/app.js';
function main() {
  const port = 8888;

  const server = app.listen(port, () =>
    console.log(`server run on http://localhost:${port}`),
  );
  server.addListener('error', console.error);
  return server;
}

const server = main();
const handlerShoutDown = (signal:NodeJS.Signals) => {
  console.log(`Received ${signal}. Closing server...`);
    server.close((error) => {
    if (error) {
      console.log('Close server error', error);
      process.exit(1);
    }
    console.log('served closed');

    //disconnected db
    //clean task
    process.exit(0);
  });
};

process.on('SIGINT', handlerShoutDown);
process.on('SIGTERM', handlerShoutDown);
