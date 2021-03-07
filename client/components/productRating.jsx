import React, { useState, useEffect } from "react";
import StarProduct from "./StarRatingProduct.jsx";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "0.5rem",
 
  },
});

function ProductRating(props) {
  const classes = useStyles();

  var [rate, setRate] = useState(0);
  var [count5, setcount5] = useState(0);
  var [count4, setcount4] = useState(0);
  var [count3, setcount3] = useState(0);
  var [count2, setcount2] = useState(0);
  var [count1, setcount1] = useState(0);

  useEffect(() => {
    axios.get('/reviews').then((res) => {
      console.log(res.data.results);
      
      var sum = 0;
      var countFive = 0;
      var countFour = 0;
      var countThree = 0;
      var countTwo = 0;
      var countOne = 0;
      for (var i = 0; i < res.data.results.length; i++) {
        sum = sum + res.data.results[i].rating;
        if (Math.floor(res.data.results[i].rating) === 5) {
          countFive = countFive + 1;
        }
        if (Math.floor(res.data.results[i].rating) === 4) {
          countFour = countFour + 1;
        }
        if (Math.floor(res.data.results[i].rating) === 3) {
          countThree = countThree + 1;
        }
        if (Math.floor(res.data.results[i].rating) === 2) {
          countTwo = countTwo + 1;
        }

        countOne = countOne + 1;
      }
      var moy = sum / res.data.results.length;

      var moy5 = countFive / res.data.results.length;
      var moy4 = countFour / res.data.results.length;
      var moy3 = countThree / res.data.results.length;
      var moy2 = countTwo / res.data.results.length;
      var moy1 = countOne / res.data.results.length;
      console.log("this is sum ", moy5);
      setRate(moy);
      setcount5(moy5);
      setcount4(moy4);
      setcount3(moy3);
      setcount2(moy2);
      setcount1(moy2);
    });
  }, []);

  return (
    <div className="product-rating-container">
      <StarProduct rate={rate} />
      <div>
        <div className={classes.root}>
          <h4  onClick={props.sortRating}className="h4-star">
            {" "}
            5 stars{" "}
            <LinearProgress variant="determinate" value={count5 * 100} />
          </h4>

          <h4 className="h4-star">
            4 stars{" "}
            <LinearProgress variant="determinate" value={count4 * 100} />
          </h4>

          <h4 className="h4-star">
            3 stars{" "}
            <LinearProgress variant="determinate" value={count3 * 100} />
          </h4>

          <h4 className="h4-star">
            2 stars
            <LinearProgress variant="determinate" value={count2 * 100} />
          </h4>

          <h4 className="h4-star">
            1 stars{" "}
            <LinearProgress variant="determinate" value={count1 * 100} />
          </h4>
        </div>
      </div>
    </div>
  );
}
export default ProductRating;
