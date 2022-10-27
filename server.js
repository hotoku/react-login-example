const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

const port = 8081;

app.listen(port, () =>
  console.log(`API is running on http://localhost:${port}/login`)
);
