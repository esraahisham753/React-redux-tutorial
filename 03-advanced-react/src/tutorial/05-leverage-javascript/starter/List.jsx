import { Person } from "./Person";
import { people } from "../../../data";

const List = () => {
  return (
    <section>
      {people.map((person) => {
        return <Person />;
      })}
    </section>
  );
};

export default List;
