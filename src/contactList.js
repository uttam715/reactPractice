import { useState } from "react";
import "./App.css";
export default function ContactList() {
  const [person, setPerson] = useState({
    name: "Muffin",
    email: "muffin@mail.com",
  });
  const contact = [
    { name: "Muffin", email: "muffin@mail.com" },
    { name: "Dudu", email: "dudu@mail.com" },
    { name: "Anand", email: "anand@mail.com" },
  ];

  function onClickHandler(e) {
    const selectedPerson = contact.filter((item) => {
      return item.name === e.target.value;
    });
    setPerson(selectedPerson[0]);
  }

  return (
    <div className="contactList">
      <div className="person">
        <button value="Muffin" onClick={onClickHandler}>
          Muffin
        </button>
        <button value="Dudu" onClick={onClickHandler}>
          Dudu
        </button>
        <button value="Anand" onClick={onClickHandler}>
          Anand
        </button>
      </div>
      <div className="contact">
        <textarea
          className="message"
          placeholder={"Chat to " + person.name}
        ></textarea>
        <button className="email" onClick={()=>alert("sent")}>{person.email}</button>
      </div>
    </div>
  );
}
