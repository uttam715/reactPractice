import { useState, useEffect } from "react";
import "./App.css";

export default function Tictac() {
  const [input, setInput] = useState("0");
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
  const [decision2, setdecision2] = useState(false);

  useEffect(() => {
    const isWinning = setDecision();
    if (isWinning) {
      setdecision(true);
      return;
    } else {
      if (input === "0") {
        setInput("X");
      } else if (input === "X") setInput("0");
    }

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
      setdecision2(true);
  }, [targetValue]);

  function handleOnClick(e) {
    const clickedTarget = e.target.dataset.name;

    if (e.target.innerText === "" && decision === false) {
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

    // setDecision();
  }

  function setDecision() {
    if (
      targetValue.a !== "" &&
      targetValue.a === targetValue.b &&
      targetValue.b === targetValue.c
    ) {
      return true;
      //   setInput(e.target.innerText);
    }

    if (
      targetValue.d !== "" &&
      targetValue.d === targetValue.e &&
      targetValue.e === targetValue.f
    )
      return true;

    if (
      targetValue.g !== "" &&
      targetValue.g === targetValue.h &&
      targetValue.h === targetValue.i
    )
      return true;
    if (
      targetValue.a !== "" &&
      targetValue.a === targetValue.d &&
      targetValue.d === targetValue.g
    )
      return true;

    if (
      targetValue.b !== "" &&
      targetValue.b === targetValue.e &&
      targetValue.e === targetValue.h
    )
      return true;

    if (
      targetValue.c !== "" &&
      targetValue.c === targetValue.f &&
      targetValue.f === targetValue.i
    )
      return true;

    if (
      targetValue.a !== "" &&
      targetValue.a === targetValue.e &&
      targetValue.e === targetValue.i
    )
      return true;

    if (
      targetValue.c !== "" &&
      targetValue.c === targetValue.e &&
      targetValue.e === targetValue.g
    )
      return true;
  }

  return (
    <div>
      <div className="outerBox">
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
      </div>
      <div>
        {decision ? (
          <span>{input} won</span>
        ) : decision2 ? (
          <span>Game Over</span>
        ) : null}
      </div>
    </div>
  );
}
