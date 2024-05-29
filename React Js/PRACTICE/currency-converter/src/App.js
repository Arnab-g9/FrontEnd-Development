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
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${selectCurrency}&to=${convertCurrency}`
          );
          const data = await res.json();
          setConversion(() => data.rates[convertCurrency]);
        } catch (error) {
          console.error("Error fetching currency data: ", error);
          setConversion(0);
        }
      }
      if (amount <= 0) {
        setConversion(0);
        return;
      } else if (selectCurrency === convertCurrency) {
        setConversion(amount);
        return;
      }
      fetchCurrency();
    },
    [amount, selectCurrency, convertCurrency]
  );
  return (
    <div className="app">
      <Header />
      <div className="form-container">
        <div className="input-container">
          <SelectCurrency
            currency={selectCurrency}
            onChangeCurrency={setSelectCurrency}
          />
          <InputValue amount={amount} onChangeAmount={setAmount} />
          <SelectCurrency
            currency={convertCurrency}
            onChangeCurrency={setConvertCurrency}
          />
        </div>

        <DisplayMessage conversion={conversion} />
      </div>
    </div>
  );
}
function SelectCurrency({ currency, onChangeCurrency }) {
  return (
    <select
      value={currency}
      onChange={(e) => onChangeCurrency(e.target.value)}
      className="btn"
    >
      <option value="USD">USD</option> <option value="EUR">EUR</option>{" "}
      <option value="CAD">CAD</option> <option value="INR">INR</option>
    </select>
  );
}

function InputValue({ amount, onChangeAmount }) {
  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      onChangeAmount(0);
    } else {
      onChangeAmount(value);
    }
  };
  return <input type="text" value={amount} onChange={handleChange} />;
}

function DisplayMessage({ conversion }) {
  console.log(conversion);
  return (
    <div className="messege-container">
      <p className="messege">{conversion}</p>
    </div>
  );
}

function Header() {
  return <header>Currency Converter</header>;
}
