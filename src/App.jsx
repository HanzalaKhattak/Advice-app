import React, { useState } from "react";
import Message from "./components/Message";

const App = () => {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center ">
        <h1 className="">
          {advice}
        </h1>
        <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded" onClick={getAdvice}>
          Get Advice
        </button>
      </div>

      <Message advice = {advice}/>
    </>
  );
};

export default App;
