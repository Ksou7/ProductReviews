import React, {useState} from "react";





export default function ProgressBar() {

  const [progress, setProgress] = useState(0);

  return (
    <div className="ui disabled progress">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

 