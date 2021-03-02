import React, { useState, useEffect } from "react";
import StarProduct from "./StarRatingProduct.jsx";
import axios from "axios";
import ProgressBar from "./ProgressBar.jsx";


function ProductRating(props) {
  var [list, setList] = useState([]);
  var [rate, setRate] = useState(0);
  var [fivenumber,FiveSetNumber]=useState()
  var [FourNumber,fourSetNumber]=useState()
  useEffect(() => {
    axios.get(`/api/reviews`).then((res) => {
      console.log(res.data.results);
      
      var sum = 0;
      var five=0
      for (var i = 0; i < res.data.results.length; i++) {
        sum = sum + res.data.results[i].rating;

      }
      var moy = sum / res.data.results.length;
      console.log("this is sum ", moy);
  
      setRate(moy);
      setlist(list=data.data.results)
    });

    

  }, []);

    


  return (
      
    <div>
      <StarProduct rate={rate} />
       <div>
        <ProgressBar/>
      </div>
    </div>
  );
}
export default ProductRating;
