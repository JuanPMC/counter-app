import React, { useState } from "react";
import CounterButton from "./counterButton";

function Counter() {

    const [count, setCount] = useState(0);

    function addToCount(by){
        setCount(count + parseInt(by))
    }

    function resetCount(){
        setCount(0)
    }

    return (
        <>
            <h2>{count}</h2>
            <CounterButton by={"1"} addToCount={addToCount} ></CounterButton>
            <CounterButton by={"2"} addToCount={addToCount} ></CounterButton>
            <CounterButton by={"5"} addToCount={addToCount} ></CounterButton>
            <button onClick={resetCount}>Reset</button>
        </>
    );
  }
  
  export default Counter;
  