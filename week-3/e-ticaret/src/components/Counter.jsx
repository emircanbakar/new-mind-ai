import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0); // default value

  return (
    <div>
      <span>Counter</span>
      <span className="element" style={{marginLeft: '10px'}}>
        {counter}
      </span>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increase number</button>
      </div>
    </div>
  )
};

export default Counter;
