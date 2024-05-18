import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [userList, setUserList] = useState(initialFriends);
  const [isSelect, setIsSelect] = useState(null);
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const friendExpense = bill - yourExpense;
  function handleSplitBill(billValue) {
    setUserList(
      userList.map((user) =>
        user.id === isSelect.id
          ? { ...user, balance: user.balance + billValue }
          : user
      )
    );
  }
  return (
    <div className="outer-container">
      <UserList
        userList={userList}
        onAddUser={setUserList}
        onSelectUser={setIsSelect}
        isSelect={isSelect}
        onIsSelect={setIsSelect}
      />
      {isSelect && (
        <SplitBill
          user={isSelect}
          bill={bill}
          onSetBill={setBill}
          yourExpense={yourExpense}
          onSetYourExpense={setYourExpense}
          friendExpense={friendExpense}
          onSplitBill={handleSplitBill}
          onIsSelect={setIsSelect}
        />
      )}
    </div>
  );
}

function UserList({ userList, onAddUser, onSelectUser, isSelect, onIsSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="left">
      <div className="user-list">
        {userList.map((friend) => (
          <User user={friend} key={friend.id} onSelectUser={onSelectUser} />
        ))}
      </div>
      {isOpen && !isSelect && (
        <AddUser userList={userList} onAddUser={onAddUser} />
      )}
      <button
        className="btn form-btn"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
          onIsSelect(null);
        }}
      >
        {isOpen && !isSelect ? "Close" : "Add"}
      </button>
    </div>
  );
}

function User({ user, onSelectUser }) {
  return (
    <div className="user">
      <div className="avater">
        <img src={user.image} alt={user.name} />
      </div>
      <div className="text-container">
        <p>{user.name}</p>
        {user.balance < 0 && (
          <p style={{ color: "red" }}>
            You owe {user.name} ${-1 * user.balance}
          </p>
        )}{" "}
        {user.balance > 0 && (
          <p style={{ color: "green" }}>
            {user.name} owe you ${user.balance}
          </p>
        )}{" "}
        {user.balance === 0 && <p>You and {user.name} are even</p>}
      </div>
      <div className="btn-container">
        <button className="list-btn btn" onClick={() => onSelectUser(user)}>
          Select
        </button>
      </div>
    </div>
  );
}

function AddUser({ userList, onAddUser }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleAdduser(newUser) {
    const newArr = [...userList, newUser];
    onAddUser(newArr);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newUser = {
      name,
      image,
      id: Date.now(),
      balance: 0,
    };
    // console.log(newUser);
    handleAdduser(newUser);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="add-user" onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="user-name">Friend Name</label>
        <input
          type="text"
          id="user-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="image-url">ImageURL</label>
        <input
          type="text"
          id="image-url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-btn-container">
        <button className="btn form-btn">Add</button>
      </div>
    </form>
  );
}

function SplitBill({
  user,
  bill,
  onSetBill,
  yourExpense,
  onSetYourExpense,
  friendExpense,
  onSplitBill,
  onIsSelect,
}) {
  const [whoPay, setWhoPay] = useState("you");
  function handleSubmit(e) {
    e.preventDefault();
    if (whoPay === "you") {
      onSplitBill(friendExpense);
    } else {
      onSplitBill(-yourExpense);
    }
    onSetBill(0);
    onSetYourExpense(0);
    onIsSelect(null);
  }
  return (
    <div className="right">
      <form className="split-bill" onSubmit={handleSubmit}>
        <div className="heading">
          <h1> Split A Bill With {user.name}</h1>
        </div>
        <div className="bill-input">
          <label htmlFor="bill-value">Bill Value</label>
          <input
            type="text"
            id="bill-value"
            value={bill}
            onChange={(e) => onSetBill(Number(e.target.value))}
          />
        </div>
        <div className="bill-input">
          <label htmlFor="your-expense">Your Expense</label>
          <input
            type="text"
            id="your-expense"
            placeholder="Enter Your Expense"
            value={yourExpense}
            onChange={(e) =>
              onSetYourExpense(
                Number(e.target.value) > bill
                  ? yourExpense
                  : Number(e.target.value)
              )
            }
          />
        </div>
        <div className="bill-input">
          <label htmlFor="friend-expense">Sarah's Expense</label>
          <input type="text" id="your-expense" value={friendExpense} disabled />
        </div>
        <div className="bill-input">
          <label htmlFor="pay">Who is paying the bill?</label>
          <select
            id="pay"
            value={whoPay}
            onChange={(e) => setWhoPay(e.target.value)}
          >
            <option value="you">You</option>
            <option value="friend">{user.name}</option>
          </select>
        </div>
        <button className="btn form-btn">Split Bill</button>
      </form>
    </div>
  );
}
