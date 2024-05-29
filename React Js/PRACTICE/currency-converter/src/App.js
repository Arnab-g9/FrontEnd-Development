import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [selectCurrency, setSelectCurrency] = useState("USD");
  const [convertCurrency, setConvertCurrency] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [conversion, setConversion] = useState(0);

  useEffect(
    function () {
      async function fetchCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${selectCurrency}&to=${convertCurrency}`
        );
        const data = await res.json();
        setConversion(() => data.rates[convertCurrency]);
      }
      if (amount < 1) return;
      else if (selectCurrency === convertCurrency) {
        setConversion(amount);
        return;
      }
      fetchCurrency();
    },
    [amount, selectCurrency, convertCurrency]
  );
  return (
    <div>
      <SelectCurrency
        currency={selectCurrency}
        onChangeCurrency={setSelectCurrency}
      />
      <InputValue amount={amount} onChangeAmount={setAmount} />
      <SelectCurrency
        currency={convertCurrency}
        onChangeCurrency={setConvertCurrency}
      />
      <DisplayMessage conversion={conversion} />
    </div>
  );
}
function SelectCurrency({ currency, onChangeCurrency }) {
  return (
    <select value={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
      <option value="USD">USD</option> <option value="EUR">EUR</option>{" "}
      <option value="CAD">CAD</option> <option value="INR">INR</option>
    </select>
  );
}

function InputValue({ amount, onChangeAmount }) {
  return (
    <input
      type="text"
      value={amount}
      onChange={(e) => onChangeAmount(Number(e.target.value))}
    />
  );
}

function DisplayMessage({ conversion }) {
  console.log(conversion);
  return <p>{conversion}</p>;
}
