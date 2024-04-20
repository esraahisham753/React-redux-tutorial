import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow((currentState) => !currentState);
  };

  return [show, toggle];
};
