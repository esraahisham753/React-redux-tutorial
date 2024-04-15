import { useState } from 'react';

const UseStateObject = () => {
  const peter = {
    name: "Peter",
    age: 24,
    hobby: "Reading"
  };

  const john = {
    name: "John",
    age: 28,
    hobby: "Screaming at computer"
  };

  const [person, setPerson] = useState(peter);

  const showJohn = () => {
    setPerson(john);
  };

  return (
    <section className="person">
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" type='button' onClick={showJohn}>Show John</button>
    </section>
  );
};

export default UseStateObject;
