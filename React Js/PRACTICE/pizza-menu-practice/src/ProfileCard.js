const skillsList = [
  { name: "HTML+CSS", rating: "💪", color: "blue" },
  { name: "JavaScript", rating: "💪", color: "yellow" },
  { name: "Web Design", rating: "💪", color: "green" },
  { name: "Git/Github", rating: "👌", color: "red" },
  { name: "React", rating: "🌿", color: "cyan" },
  { name: "Java", rating: "😊", color: "orange" },
];
export default function ProfileCard() {
  return (
    <div className="profile-card">
      <ImageContainer />
      <Bio />
      <Skills />
    </div>
  );
}
function ImageContainer() {
  return (
    <div className="image-container">
      <img src="jonas.jpeg" alt="jonas" />
    </div>
  );
}

function Bio() {
  return (
    <div className="bio">
      <h2>Jonas Schmedtmann</h2>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a cours, I like to play board games to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skill-list">
      {skillsList.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <p>{skill.name}</p>
      <span>{skill.rating}</span>
    </div>
  );
}
