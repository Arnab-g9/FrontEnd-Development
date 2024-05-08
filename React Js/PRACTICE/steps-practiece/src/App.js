import { useState } from "react";
import "./index.css";
const messageList = [
  "step 1 : Learn React 📖",
  "step 2 : Apply for the job 🧑‍💼",
  "step 3 : Invest your income 💵",
];

export default function App() {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  }
  function handleNext() {
    if (count < messageList.length) {
      setCount((count) => count + 1);
    }
  }
  return (
    <>
      <p
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        className="open-close-btn"
      >
        ❌
      </p>
      {isOpen && (
        <div className="card-container">
          <div className="steps-count">
            <div className={`step ${count >= 1 ? "active" : ""}`}>1</div>
            <div className={`step ${count >= 2 ? "active" : ""}`}>2</div>
            <div className={`step ${count >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="step-message">{messageList[count - 1]}</p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              className="btn"
              // onMouseEnter={() => alert("Previous")}
            >
              Previous
            </button>
            <button onClick={handleNext} className="btn">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
