const app = require("./src/app");
const PORT = 3000;
const db_connect = require("./src/config/db");

db_connect(() => {
  app.listen(PORT, () => {
    console.log(`your app is running on http://localhost:${PORT}`);
  });
});
