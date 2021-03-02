import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
 
class Star extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: props.star
    };
  }
 

 
  render() {
    const { rating } = this.state;
    
    return (                
      <div id="rating-div">
       
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
        
        />
      </div>
    );
  }
}
 
export default Star
