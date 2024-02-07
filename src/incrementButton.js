import {useState} from 'react';
export default function IncrementButton()
{
    const [value, changeValue]=useState(0);
    
  // function increment(e)
  // {
  //   const target =parseInt(e.target.dataset.increment);
  //   // console.log("target",typeof(target));
  //   // let val = val+1;
  //   // changeValue(value=>value+1);
  //   changeValue(value+target);
  // }
  return (
    <>
      <button data-increment="1" onClick={(e) =>{changeValue(value+parseInt(e.target.dataset.increment))}}>+1</button>
      <button data-increment="3"
        onClick={(e) => 
          changeValue(value+parseInt(e.target.dataset.increment))
        }
      >
        +3
      </button>
      <h1>Score:{value}</h1>
    </>
  );
}