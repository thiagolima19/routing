const express = require("express");
const app = express();
const port = 7000;

const customRoutes = require("./route");

app.use("/", customRoutes);

// app.get("/", (req, res) => {
//   res.send("Hellow, Express");
// });

app.listen(port, () => {
  console.log(`Server is running on htpp://localhost:${port}`);
});
