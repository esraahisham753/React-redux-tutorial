import { useState } from "react";
import { data } from "../../../data";

const Record = (props) => {
  const { id, name } = props;

  return (
    <li>
      {name} <button type="button">Remove</button>
    </li>
  );
};

const UseStateArray = () => {
  const [records, setRecords] = useState(data);

  return (
    <section className="data">
      <ul className="data__list">
        {records.map((record) => {
          return <Record {...record} key={record.id}/>
        })}
      </ul>
      <button type="button">Clear List</button>
    </section>
  );
};

export default UseStateArray;
