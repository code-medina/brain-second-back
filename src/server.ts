import { app } from './app/app.js';
function main() {
  const port = 8888;

  const server = app.listen(port, () =>
    console.log(`server run on http://localhost:${port}`),
  );
  server.addListener('error', console.error);
}

main();