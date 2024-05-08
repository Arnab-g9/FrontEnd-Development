import { useState } from "react";

// const data = [
//   {
//     userName: "Arnab Ghorai",
//     imageUrl:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     userName: "Namita Khapar",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

export default function App() {
  return (
    <div>
      <EatAndSplit />
    </div>
  );
}

function EatAndSplit() {
  const [users, setUsers] = useState([]);
  function handleAddUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }
  return (
    <div>
      <UserList users={users} />
      <OpenUserFormButton onAddUser={handleAddUser} />
    </div>
  );
}

function UserList({ users }) {
  return (
    <div className="list-container">
      {users.slice().map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
function User({ user }) {
  return (
    <div className="user">
      <img src={`${user.imageUrl}`} width={"50px"} />
      <span>{user.name}</span>
    </div>
  );
}
function OpenUserFormButton({ onAddUser }) {
  const [openForm, setOpenForm] = useState(false);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleToggle() {
    setOpenForm(!openForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { name, imageUrl, id: Date.now() };
    console.log(newUser);
    onAddUser(newUser);
    setName("");
    setImageUrl("");
  }

  return (
    <div>
      {!openForm ? (
        <button onClick={handleToggle}>Add</button>
      ) : (
        <>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="image Url"
            />
            <button onClick={handleSubmit}>Add</button>
          </form>
          <button onClick={handleToggle}>close</button>
        </>
      )}
    </div>
  );
}
// function UserForm() {}
// function Add() {}
// function close() {}
