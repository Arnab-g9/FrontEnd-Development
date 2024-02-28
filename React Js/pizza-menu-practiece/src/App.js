const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>FIRST REACT PIZZA COMPANY</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData.slice();
  //   const pizzas = [];
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <p>
        {pizzas.length > 0
          ? "uthentic Itelian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious."
          : "We are working on our menu"}
      </p>
      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaItem={pizza} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </main>
  );
}

function Pizza({ pizzaItem }) {
  return (
    <li className={`pizza ${pizzaItem.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaItem.photoName} alt={pizzaItem.name} />
      <div>
        <h3>{pizzaItem.name}</h3>
        <p>{pizzaItem.ingredients}</p>
        <span>
          <p>{pizzaItem.soldOut ? "sold out" : pizzaItem.price}</p>
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn"> Order </button>
    </div>
  );
}
