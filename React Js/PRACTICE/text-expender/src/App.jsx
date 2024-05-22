import { useState } from "react";

export default function App() {
  return (
    <div className="outer-container">
      <TextExpender length={10} backgroundColor="yellow" color="red">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpender>
      <TextExpender
        openText="show text"
        closeText="collapse text"
        length={25}
        backgroundColor="red"
        color="white"
        cursor="crossHair"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpender>
      <TextExpender length={20} openText="open text" closeText="close text">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpender>
    </div>
  );
}

function TextExpender({
  children,
  openText = "show more",
  closeText = "show less",
  length = 20,
  backgroundColor = "blue",
  color = "white",
  cursor = "pointer",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const displayText = children.split(" ").slice(0, length).join(" ") + "...";
  const buttonStyle = {
    padding: "10px 30px",
    backgroundColor,
    color,
    cursor,
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    marginLeft: "10px",
  };
  return (
    <div>
      {isOpen ? children : displayText}
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        style={buttonStyle}
      >
        {isOpen ? closeText : openText}
      </button>
    </div>
  );
}
