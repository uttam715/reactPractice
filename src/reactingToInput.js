import { useState, useEffect } from "react";

export function DisableButton() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("typing");

  useEffect(() =>{
    if (status === "Success") {
        setError("Right answer!");
      } else {
        setError("Wrong answer, please try again!");
      }
  },[status])

  function onChangeHandler(e) {
    setAnswer(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    let ans = answer.toLowerCase();
    console.log(ans);
    if (ans === "new delhi") {
      setStatus("Success");
    } else {
      setStatus("typing");
    }

    // if (status === "Success") {
    //   setError("Right answer!");
    // } else {
    //   setError("Wrong answer, please try again!");
    // }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="ans">What is the capital of India</label>
      <br></br>
      <textarea
        id="ans"
        disabled={status === "submitting"}
        onChange={onChangeHandler}
      ></textarea>
      <br></br>
      <button
        type="submit"
        disabled={status === "submitting" || answer.length === 0}
      >
        Submit
      </button>
      <br></br>
      <span>{error}</span>
    </form>
  );
}
