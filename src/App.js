import { useState } from "react";
import "./App.css";

function App() {

// default value is set to 0
  const[count,setconut] = useState(0);

  function decHandler() {
    setconut(count-1);
  }

  function incHandler() {
    setconut(count+1);
  }

  function resethandler() {
    setconut(0);
  }

  return (

    //main div  
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-10 bg-[#344151]">
      
      {/* heading */}
      <div className="font-medium text-2xl text-[#0398d4]">
      Increment and Decrement
      </div>

      {/* symbols */}

      <div className="bg-white justify-centre py-3 gap-12 rounded-sm text-[25px] text-[#344151] flex">

        <button onClick={decHandler} className="text-5xl border-r-2 text-centre w-20 border-[#bfbfbf]">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
        {/* used to display number in react page */}
          {count}
        </div>

        <button onClick={incHandler} className="text-5xl border-l-2 text-centre w-20 border-[#bfbfbf]">
          +
        </button>

      </div>

      <button onClick={resethandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>

    </div>
  );
}

export default App;
