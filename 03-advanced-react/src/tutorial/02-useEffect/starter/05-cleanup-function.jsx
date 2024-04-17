import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [visible, setVisible] = useState(true);

  console.log("render");

  const handleButtonClick = () => {
    setVisible((currentState) => !currentState);
  };

  return (
    <section>
      <button className="btn" onClick={handleButtonClick}>
        Toggle
      </button>
      {visible && <Component />}
    </section>
  );
};

const Component = () => {
  useEffect(() => {
    const someFunc = () => {};

    window.addEventListener("scroll", someFunc);

    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);

  return <h2>Second Component</h2>;
};

export default CleanupFunction;
