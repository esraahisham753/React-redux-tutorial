import { useState } from "react";

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button className="btn" type="button" onClick={handleClick}>Increment</button>
    </>
  );
};

export default UseStateGotcha;
