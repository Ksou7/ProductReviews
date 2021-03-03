import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Star from "./StarRating.jsx";
import Dropdown from "./Drop-down.jsx";
import Paragraph from "./paragraph.jsx";
import Button from "@material-ui/core/Button";
import ProductRating from "./productRating.jsx";
function ReviewList() {
  // Declare a new state variable, which we'll call "count"
   
  var [list, setList] = useState([]);
 
  var [limit,setLimit] = useState(2)
 



  useEffect(() => {
    const fetchData = () => {
      axios.get(`/api/reviews`).then((data) => {
        setList((list = data.data.results));
      });
    };
    fetchData();
  }, [])
  const showMore = (e) => {
    e.preventDefault()

    if (limit<list.length){
    setLimit(limit + 2);}
    if (limit>=list.length){
      setLimit(limit=2)
    }
   
  }

     const sortRating= list.sort((a, b) =>
     list.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
  
     )
      console.log(sortRating)
     const sortHelp = list.sort((a, b) =>
      a.helpfulness > b.helpfulness
        ? 1
        : a.helpfulness === b.helpfulness
        ? a.rating > b.rating
          ? 1
          : -1
        : -1
    )


  const answer = (list) => {
    if (list.answer) {
      return (
        <div>
          <h3>answer</h3>
          <h4>{list.answer}</h4>;
        </div>
      );
    } else {
      return;
    }
  };
  
  
  return (
    <div className="container">
      <div className="product-div">
        <ProductRating />
      </div>
      <div >
      <div className="review-list">
        <h3 className="review-h1">{list.length} reviews sorted by</h3>
        <div className='arrow-div'>
          <Dropdown  sortHelp={sortHelp} sortRating={ sortRating} list={list} />
       
        </div>
      </div>
      {sortRating.slice(0, limit).map((element, index) => (
        <div key={index}>
          <div className="div-rating">
            <Star star={element.rating} />
            <div className="div-time">
              <p className="review-time">
                {element.reviewer_name}, {moment(element.date).format("ll")}
              </p>
          
            </div>
          </div>
            

          <Paragraph text={element} />

          <div>{answer(element)}</div>
          <div className="helpful-div">
            <p className="helpful-word"> helpful?</p>
            <div className="vl"></div>
            <a className="btn-yes">yes({element.helpfulness})</a>
            <a className="btn-report">report</a>  
          </div>
          <hr />
        </div>
      ))}
      <div className="div-button">
        <div>
          <Button   onClick={showMore} variant="outlined" className="ui button">
            MORE REVIEWS
          </Button>
        </div>
        <div>
          <Button  variant="outlined" className="ui button">
            ADD A REVIEW +
          </Button>
        </div>
      </div>
 </div>
    </div>
  );
}
export default ReviewList;
