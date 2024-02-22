import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const arr = useState(0);
  // console.log(arr);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [name, setName] = useState({ name: "Arnab" });

  // function handleClick() {
  //   if (isOpen) {
  //     setIsOpen(false);
  //   } else setIsOpen(true);
  // }
  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
    // setName({ name: "hello" });
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>{" "}
      {/*onClick={handleClick}*/}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div> */}
          </div>

          <p className="message">
            Step {step}:{messages[step - 1]}
            {/* {name.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              // style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // onClick={() => alert("hello")}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
