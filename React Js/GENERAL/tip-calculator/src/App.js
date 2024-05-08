import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [amount, setAmount] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const avgTip = (Number(tip1) + Number(tip2)) / 2;
  const tip = (amount * avgTip) / 100;
  const total = amount + tip;
  function onAmountChange(e) {
    setAmount(() => Number(e.target.value));
  }
  function handleReset() {
    setAmount("");
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <Amount amount={amount} onAmountChange={onAmountChange} />
      <Tip tip={tip1} onChangeTip={(e) => setTip1(Number(e.target.value))}>
        <span>How do you like the service? </span>
      </Tip>
      <Tip tip={tip2} onChangeTip={(e) => setTip2(Number(e.target.value))}>
        <span>How do your friend like the service? </span>
      </Tip>
      {amount > 0 && <Output tip={tip} total={total} amount={amount} />}

      <Reset onReset={handleReset} />
    </div>
  );
}

function Amount({ amount, onAmountChange }) {
  return (
    <div>
      <span>How much was the bill</span>
      <input type="text" value={amount} onChange={onAmountChange} />
    </div>
  );
}
function Tip({ tip, onChangeTip, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={onChangeTip}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">it was okey(5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}
function Output({ tip, total, amount }) {
  return (
    <div>
      you pay {total} (${amount} + ${tip})
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
