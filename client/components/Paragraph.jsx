
import React, { useState} from "react";



const Paragraph = ({ text, length =250 }) => {
    const [showLess, setShowLess] =useState(true);
  
    if (text.body.length < length) {
      return (  <div className="review-item">
      <h4 className="review-paragraph" maxLength="20">
        {text.summary}
      </h4>
      <p className="review-answer">{text.body}</p>
    </div>)
             
    }
  
    return (
      <div className="review-item">
            <h4 className="review-paragraph" maxLength="20">
        {text.summary}
      </h4>
        <p className="review-answer"
          dangerouslySetInnerHTML={{
            __html: showLess ? `${text.body.slice(0, length)}...` : text.body,
          }}
        ></p>
        <div className="show">
        <a
          className="show-more"
          onClick={() => setShowLess(!showLess)}
        >
          &nbsp;View {showLess ? "More" : "Less"}
        </a>
        </div>
      </div>
    );
  };
  export default Paragraph 