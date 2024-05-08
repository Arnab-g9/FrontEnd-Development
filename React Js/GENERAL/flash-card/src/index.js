import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

const skills = [
  {
    skill: "HTML-CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="outer-container">
      <ProfileImage name="jonas" />
      <Name name="Jonas Schmedtmann" />
      <Bio />
      <Skills />
    </div>
  );
}

function ProfileImage(props) {
  return (
    <div className="profile-image-holder">
      <img src="jonas.jpeg" alt={props.name} />
    </div>
  );
}

function Name(props) {
  return (
    <div className="name-holder">
      <h2>{props.name}</h2>
    </div>
  );
}

function Bio() {
  return (
    <div className="bio-holder">
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function Skills() {
  // const skillArr = skills.map((skill) => {
  //   return <Skill skillObj={skill} />;
  // });
  return (
    <div className="skills">
      {/* <Skill name="HTML+CSS" imogi="👌" color="blue" />
      <Skill name="JavaScript" imogi="🌿" color="yellow" />
      <Skill name="Web Design" imogi="😉" color="green" />
      <Skill name="Git and GitHub" imogi="❤️" color="red" /> */}
      {/* {skillArr} */}
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  if (skillObj.level === "advanced") {
    return (
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        <p>{skillObj.skill}</p>
        <span>💪</span>
      </div>
    );
  } else if (skillObj.level === "intermediate") {
    return (
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        <p>{skillObj.skill}</p>
        <span>😉</span>
      </div>
    );
  } else {
    return (
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        <p>{skillObj.skill}</p>
        <span>🌿</span>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --------- Instructer code ---------
// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         {/* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Jonas Schmedtmann</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course, I like to play board games, to cook (and eat), or to
//         just enjoy the Portuguese sun at the beach.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="React" emoji="💪" color="blue" />
//       <Skill skill="HTML+CSS" emoji="💪" color="orange" />
//       <Skill skill="JavaScript" emoji="💪" color="yellow" />
//       <Skill skill="Svelte" emoji="👶" color="orangered" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
