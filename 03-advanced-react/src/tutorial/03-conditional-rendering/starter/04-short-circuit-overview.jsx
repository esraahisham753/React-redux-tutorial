import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [name, setName] = useState('esraa');
  const [number, setNumber] = useState(0);

  const codeExample = number || 'Hello World';

  return (
      <section>
        <h4>Falsy OR: {number || 'hello world'}</h4>
        <h4>Falsy AND: {number && 'hello world'}</h4>
        <h4>Truthy OR: {name || 'hello world'}</h4>
        <h4>Truthy AND: {name && 'hello world'}</h4>
        {codeExample}
      </section>
  );
};
export default ShortCircuitOverview;
