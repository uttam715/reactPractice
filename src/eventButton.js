function AlertButton({ message, children }) {
    console.log(children);
    return (
      <button className="button" onClick={handlerBcolor}>
        {children}
      </button>
    );
    function handlerBcolor(e){
        let backgroundcolor=e.target.style;
        backgroundcolor.backgroundColor="red"
    }
  }
  
  export default function Toolbar() {
    return (
      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        
      </div>
    );
  }