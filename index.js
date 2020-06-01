const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Now serving Express app at http://localhost:${PORT}`);
});
