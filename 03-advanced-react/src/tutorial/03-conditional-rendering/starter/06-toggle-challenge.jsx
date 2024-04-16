import { useState } from "react";

const ToggleChallenge = () => {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <section>
      <button className="btn" onClick={handleButtonClick}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <ToggleSection />}
    </section>
  );
};

const ToggleSection = () => {
  return (
    <section>
      <h1>Hey! I am a toggle section</h1>
    </section>
  );
};

export default ToggleChallenge;
