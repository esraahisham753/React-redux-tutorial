import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [data, setData] = useState(data);

  return (
    <section className="data">
      <ul className="data__list"></ul>
    </section>
  );
};

export default UseStateArray;
