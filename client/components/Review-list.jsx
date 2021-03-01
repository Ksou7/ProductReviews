import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Star from "./StarRating.jsx";

function ReviewList() {
  // Declare a new state variable, which we'll call "count"
  var [list, setList] = useState([]);

  //   useEffect(() => {
  //     axios.get(`/api/reviews`).then(data => {
  //       setList(data.data);
  //       console.log(data.data)

  //     })
  // }, []);

  useEffect(() => {
    const fetchData = () => {
      axios.get(`/api/reviews`).then((data) => {
        console.log(data.data.results);
        setList((list = data.data.results));
        console.log(list);
      });
    };
    fetchData();
  }, []);
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
    <div className="container-div">
      <div className="review-list">
        <h3 className="review-h1">{list.length} reviews sorted by</h3>

        <div class="ui compact selection dropdown">
          <i class="dropdown icon"></i>
          <div class="text">Compact</div>
          <div class="menu">
            <div class="item">A</div>
            <div class="item">B</div>
            <div class="item">C</div>
          </div>
        </div>
      </div>
      {list.map((element, index) => (
        <div key={index}>
          <div className="div-rating">
            <Star star={element.rating} />
            <p className="review-time">
              {element.reviewer_name},{moment(element.date).format("ll")}
            </p>
          </div>

          <div className="review-item">
            <h4 className="review-paragraph" maxLength="20">
              {element.summary}
            </h4>
            <p className="review-answer">{element.body}</p>
          </div>
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
          <button className="ui button">Button</button>
        </div>
        <div>
          <button className="ui button">Button</button>
        </div>
      </div>
    </div>
  );
}
export default ReviewList;
