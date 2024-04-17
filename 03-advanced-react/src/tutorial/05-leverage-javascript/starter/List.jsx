import { Person } from "./Person";
import { people } from "../../../data";

const List = () => {
  return (
    <section>
      {people.map((person) => {
        return <Person {...person} key={person.id}/>;
      })}
    </section>
  );
};

export default List;
