import React from "react";
import StarRatingComponent from "react-star-rating-component";

class StarProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="div-container">
          <div className="">
            <h1 className="">{this.props.rate}</h1>
          </div>
        <div id="rating-div">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={Math.floor(this.props.rate)}
          />
        </div>
      </div>
    );
  }
}

export default StarProduct;
