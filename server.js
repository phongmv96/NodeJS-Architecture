const app = require("./src/app");

const PORT = 9090;
const server = app.listen(PORT, () => {
  console.log(`.....WSV ecommerce start with: ${PORT}.....`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit server express !!!");
  });
});
