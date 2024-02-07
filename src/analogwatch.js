import { useEffect, useState } from "react";
import "./App.css";
export default function AnalogWatch() {
  const [handRotation, setHandRotation] = useState({
    secHandRotation: 0,
    mntHandRotation: 0,
    hrHandRotation: 0,
  });
  const numberArray = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];

  useEffect(() => {
    setInterval(clockTime, 1000);
  }, []);

  function clockTime() {
    let date = new Date();
    let sec = date.getSeconds();
    let minut = date.getMinutes();
    let hour = date.getHours();

    setHandRotation({
      secHandRotation: 6 * sec,
      mntHandRotation: 6 * minut + sec / 10,
      hrHandRotation: hour * 30 + minut / 2,
    });
  }

  return (
    <div className="mainDiv">
      <div className="circle">
        {numberArray.map((item, i) => (
          <span
            className="number"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <span
              style={{ transform: `rotate(${-i * 30}deg)`, display: "block" }}
            >
              {item}
            </span>
          </span>
        ))}
        <div>
          <div
            className="secHand"
            style={{ transform: `rotate(${handRotation.secHandRotation}deg)` }}
          ></div>
          <div
            className="minutHand"
            style={{ transform: `rotate(${handRotation.mntHandRotation}deg)` }}
          ></div>
          <div
            className="hourHand"
            style={{ transform: `rotate(${handRotation.hrHandRotation}deg)` }}
          ></div>
        </div>

        <div className="niddleFixer"></div>
      </div>
    </div>
  );
}
