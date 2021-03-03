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
  console.log('I am in service 4')
  console.log(req.url)
  next()
});

app.get("/api/reviews", async (req, res) => {
  try {
    const Authorization = "a20487f403954c245e367c9dd6baa3c31a02d7aa";
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
  console.log(`Example app listening at http://localhost:${port}`);
});
