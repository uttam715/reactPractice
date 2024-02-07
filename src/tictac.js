import { useState } from "react";
import "./App.css";

export default function Tictac() {
  const [input, setInput] = useState("");
  const [targetValue, setTargetValue] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
  });
  const [decision, setdecision] = useState(false);

  function handleOnClick(e) {
    if (input === "0") {
      setInput("X");
    } else if (input === "X") setInput("0");
    else if (input === "") {
      setInput("0");
    }
    const clickedTarget = e.target.dataset.name;
    switch (clickedTarget) {
      case "a":
        setTargetValue({
          ...targetValue,
          a: input,
        });
        break;
      case "b":
        setTargetValue({
          ...targetValue,
          b: input,
        });
        break;
      case "c":
        setTargetValue({
          ...targetValue,
          c: input,
        });
        break;
      case "d":
        setTargetValue({
          ...targetValue,
          d: input,
        });
        break;
      case "e":
        setTargetValue({
          ...targetValue,
          e: input,
        });
        break;
      case "f":
        setTargetValue({
          ...targetValue,
          f: input,
        });
        break;
      case "g":
        setTargetValue({
          ...targetValue,
          g: input,
        });
        break;
      case "h":
        setTargetValue({
          ...targetValue,
          h: input,
        });
        break;
      case "i":
        setTargetValue({
          ...targetValue,
          i: input,
        });
        break;
    }
  }
  if (
    targetValue.a !== "" &&
    targetValue.a === targetValue.b &&
    targetValue.b === targetValue.c
  ) {
    return <span>{targetValue.b} won</span>;
  }
  if (
    targetValue.d !== "" &&
    targetValue.d === targetValue.e &&
    targetValue.e === targetValue.f
  ) {
    return <span>{targetValue.e} won</span>;
  }
  if (
    targetValue.g !== "" &&
    targetValue.g === targetValue.h &&
    targetValue.h === targetValue.i
  )
    return <span>{targetValue.h} won</span>;
  if (
    targetValue.a !== "" &&
    targetValue.a === targetValue.d &&
    targetValue.d === targetValue.g
  )
    return <span>{targetValue.d} won</span>;

  if (
    targetValue.b !== "" &&
    targetValue.b === targetValue.e &&
    targetValue.e === targetValue.h
  )
    return <span>{targetValue.e} won</span>;

  if (
    targetValue.c !== "" &&
    targetValue.c === targetValue.f &&
    targetValue.f === targetValue.i
  )
    return <span>{targetValue.i} won</span>;

  if (
    targetValue.a !== "" &&
    targetValue.a === targetValue.e &&
    targetValue.e === targetValue.i
  )
    return <span>{targetValue.i} won</span>;

  if (
    targetValue.c !== "" &&
    targetValue.c === targetValue.e &&
    targetValue.e === targetValue.g
  )
    return <span>{targetValue.c} won</span>;
  if (
    targetValue.c !== "" &&
    targetValue.a !== "" &&
    targetValue.b !== "" &&
    targetValue.c !== "" &&
    targetValue.d !== "" &&
    targetValue.f !== "" &&
    targetValue.g !== "" &&
    targetValue.h !== "" &&
    targetValue.i !== ""
  )
    return <span>Game Over</span>;

  return (
    <div className="outerBox">
      {!decision && (
        <>
          <div className="firstLine">
            <div className="innerBox" data-name="a" onClick={handleOnClick}>
              {targetValue.a}
            </div>
            <div className="innerBox" data-name="b" onClick={handleOnClick}>
              {targetValue.b}
            </div>
            <div className="innerBox" data-name="c" onClick={handleOnClick}>
              {targetValue.c}
            </div>
          </div>
          <div className="secLine">
            <div className="innerBox " data-name="d" onClick={handleOnClick}>
              {targetValue.d}
            </div>
            <div className="innerBox " data-name="e" onClick={handleOnClick}>
              {targetValue.e}
            </div>
            <div className="innerBox " data-name="f" onClick={handleOnClick}>
              {targetValue.f}
            </div>
          </div>
          <div className="thrdLine">
            <div className="innerBox " data-name="g" onClick={handleOnClick}>
              {targetValue.g}
            </div>
            <div className="innerBox " data-name="h" onClick={handleOnClick}>
              {targetValue.h}
            </div>
            <div className="innerBox " data-name="i" onClick={handleOnClick}>
              {targetValue.i}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
