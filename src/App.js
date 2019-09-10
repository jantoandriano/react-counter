import React from "react";
import CounterHooks from "./components/CounterHooks";
import Counter from "./components/Counter"


const App = () => {
  return (
    <div>
      <Counter/>
      <CounterHooks/>
    </div> 
  );
};

export default App;