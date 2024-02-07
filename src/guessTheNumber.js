import { useState } from "react";

export default function GuessTheNumber() {
  const [enteredNumber, setEnteredNumber] = useState(null);
  let [tries, setTries] = useState(10);
  let [decision, setdecision] = useState(false);
  let [block, setBlock] = useState(false);
  console.log(enteredNumber);
//   let gussingNumber = "123";
  let [gussingNumber,setgussNumber]=useState(0);


  console.log(gussingNumber);

  function handleButtonOnClick(e) {
    if (parseInt(enteredNumber) !== gussingNumber) {
      setTries(--tries);
    } else {
      setdecision(true);
    }
  }
  function handlStartOnClick() {
    setgussNumber(Math.round(Math.random()*99));
    
    if (!block) {
      setBlock(true);
    }
    else if(block){
        setBlock(false)
        setTries(10);
        setdecision(false);

    }
  }

  return (
    <div>
      {!block ? (
        <button onClick={handlStartOnClick}>Start the Game</button>
      ) : (
        <div>
          {tries === 0 ? <div><span>You loose</span><button onClick={handlStartOnClick}>Start Again</button></div> : null}
          {decision && tries !== 0 && <div><span>You Won</span><button onClick={handlStartOnClick}>Start Again</button></div>}
          {!decision && tries !== 0 && (
            <div>
              <input
                type="password"
                disabled="true"
                value={gussingNumber}
              ></input>
              <label htmlFor="number">Guess the Number:</label>
              <input
                type="number"
                id="number"
                onChange={(e) => setEnteredNumber(e.target.value)}
              ></input>
              <button onClick={handleButtonOnClick}>Check</button>
              <span>{tries}+ tryies left</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
// function StartGame(){
//     return(
//         <div>
//             <input type="text"></input>
//         </div>
//     )
// }
