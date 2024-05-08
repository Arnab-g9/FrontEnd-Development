import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  // function StepDecrement() {
  //   setStep((step) => step - 1);
  // }
  // function StepIncrement() {
  //   setStep((step) => step + 1);
  // }

  function handleInputchange(e) {
    let value = e.target.value;
    setCount(Number(value));
  }
  function countDecrement() {
    // console.log("step " + typeof step);
    setCount((count) => count - step);
  }
  function countIncrement() {
    // console.log("step " + typeof step);
    setCount((count) => count + step);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>step: {step}</span>
        {/* <button onClick={StepDecrement}>-</button>
        <p>step: {step}</p>
        <button onClick={StepIncrement}>+</button> */}
      </div>

      <div>
        <button onClick={countDecrement}>-</button>

        <input type="text" value={count} onChange={handleInputchange} />

        <button onClick={countIncrement}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <div>
        {count !== 0 || step !== 1 ? (
          <button
            onClick={() => {
              setCount(0);
              setStep(0);
            }}
          >
            reset
          </button>
        ) : null}
      </div>
    </div>
  );
}
