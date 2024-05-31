function CounterButton({by,addToCount}) {

    return (
      <div className="Counter">
        <button onClick={() => addToCount(-1*by)}>-{by}</button>
        <button onClick={() => addToCount(by)}>+{by}</button>

      </div>
    );
  }
  
  export default CounterButton;
  