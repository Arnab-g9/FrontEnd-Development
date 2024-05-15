import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <ul className="container">
      {faqs.map((faq, i) => (
        <Accordian
          faq={faq}
          key={i}
          index={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </ul>
  );
}
function Accordian({ faq, index, curOpen, onOpen }) {
  const isOpen = curOpen === index;
  return (
    <li
      onClick={() => onOpen((curOpen) => (curOpen === index ? null : index))}
      className={`item ${isOpen ? "green-border" : ""} `}
    >
      <span className={`no ${isOpen ? "text-green" : ""}`}>
        {index + 1 < 10 ? `0${index + 1}` : index + 1}{" "}
        <p className="question">{faq.title}</p>
      </span>

      {isOpen && <p className="answer">{faq.text}</p>}
    </li>
  );
}
