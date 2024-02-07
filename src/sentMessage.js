import { useState } from "react";
export default function SentMessage()
{
  const [to, setTo] = useState("Bob");
  const [message, sentMessage] = useState("hello");
  const [bcolor, setBcolor] = useState("white");
  const [btext, setBtext] = useState("send");

  // const a = 'hello' + to; `hello ${to},`

  return (
    <>
      <label>
        To:{"  "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <textarea
        placeholder="message"
        value={message}
        onChange={(e) => sentMessage(e.target.value)}
      ></textarea>
      <br></br>
      <br></br>
      <button
        type="submit"
        style={{ backgroundColor: bcolor }}
        onClick={(e) => {
          alert(`You said ${message} to ${to}`);
          setBtext("sent");
          e.target.style.backgroundColor="green";
        }}
        onMouseOver={(e) => {
          setBcolor("red");
        }}
        onMouseOut={(e) => {
          setBcolor("white");

        }}
      >
        {btext}
      </button>
      <span> {message}</span>
    </>
  );
}