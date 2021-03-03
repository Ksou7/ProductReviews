const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const env = require("dotenv").config();
const axios = require("axios");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/reviews", async (req, res) => {
  try {
    const Authorization = process.env.token_key;
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
  console.log(`Example app listening at http://localhost:${port}`)
})