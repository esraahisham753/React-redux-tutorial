import { useState } from "react";

const ToggleChallenge = () => {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <button className="btn" onClick={handleButtonClick}>
      {visible ? "Hide" : "Show"}
    </button>
  );
};

export default ToggleChallenge;
