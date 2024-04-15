import { useState } from "react";
import { data } from "../../../data";

const Record = (props) => {
  const { id, name, removeItem } = props;

  return (
    <li>
      {name} <button type="button" onClick={() => removeItem(id)}>Remove</button>
    </li>
  );
};

const UseStateArray = () => {
  const [records, setRecords] = useState(data);

  const removeItem = (id) => {
    setRecords((prevRecords) => {
      return prevRecords.filter((record) => record.id !== id);
    });
  }

  const clearList = () => {
    setRecords([]);
  }

  return (
    <section className="data">
      <ul className="data__list">
        {records.map((record) => {
          return <Record removeItem={removeItem} {...record} key={record.id}/>
        })}
      </ul>
      <button type="button" className="btn" onClick={clearList}>Clear List</button>
    </section>
  );
};

export default UseStateArray;
