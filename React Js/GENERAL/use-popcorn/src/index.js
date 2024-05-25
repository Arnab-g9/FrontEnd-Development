import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [starNo, setStarNo] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetStar={setStarNo} />
//       <p>This movie was rated {starNo} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test /> */}
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating size={24} color="red" /> */}
  </React.StrictMode>
);
