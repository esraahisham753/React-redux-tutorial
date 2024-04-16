import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible((currentState) => !currentState);
  };

  return (
    <section>
      <button className="btn" onClick={handleButtonClick}>Toggle</button>
      {visible && <Component />}
    </section>
  );
};

const Component = () => {
  useEffect(() => {
    console.log('Hi from the second component');
  }, []);

  return <h2>Second Component</h2>;
}

export default CleanupFunction;
