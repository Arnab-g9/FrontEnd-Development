import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourLike, setYourLike] = useState(0);
  const [friendslike, setFriendsLike] = useState(0);
  const avgLike = (yourLike + friendslike) / 2;
  const totalBill = bill + bill * (avgLike / 100);
  function handlePayAndReset() {
    setBill(0);
    setYourLike(0);
    setFriendsLike(0);
  }
  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Tip like={yourLike} onSetLike={setYourLike}>
        How did you like the service?
      </Tip>
      <Tip like={friendslike} onSetLike={setFriendsLike}>
        How did your friend like the service?
      </Tip>
      <ShowText bill={bill} avg={avgLike} totalBill={totalBill} />
      <Button onClick={handlePayAndReset}>Pay</Button>
      <Button onClick={handlePayAndReset}>Reset</Button>
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ like, onSetLike, children }) {
  return (
    <div>
      <p>{children}</p>
      <select value={like} onChange={(e) => onSetLike(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function ShowText({ bill, avg, totalBill }) {
  return (
    <div>
      <p>
        you pay ${totalBill} (${bill} + ${avg} tip)
      </p>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
