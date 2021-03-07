const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3004;
const axios = require("axios");
// require("dotenv").config();
const cors = require("cors");
app.use(cors());

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

// app.use((req, res, next) => {

//   next();
// });

app.get("/reviews", async (req, res) => {
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
  console.log(`Example app listening at :${port}`);
});
