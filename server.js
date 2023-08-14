const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(cors());


app.use(express.json());
app.use('/api', require('./routes/weather'));

//for deployment
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});