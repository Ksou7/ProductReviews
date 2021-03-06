const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3004;
const axios = require("axios");
// require("dotenv").config();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res, next) => {
  console.log("I am in service 4");
  console.log(req.url);
  next();
});

app.get("/reviews", async (req, res) => {
  res.send("effffyfc");
  try {
    const Authorization = "";
    const data = await axios.get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11135",
      {
        headers: {
          Authorization: Authorization,
        },
      }
    );
    res.send(data.data);
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://206.189.62.246:${port}`);
});
