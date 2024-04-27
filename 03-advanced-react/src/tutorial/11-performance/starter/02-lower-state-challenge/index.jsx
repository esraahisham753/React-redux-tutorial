import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import NameForm from "./NameForm";

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <NameForm addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
