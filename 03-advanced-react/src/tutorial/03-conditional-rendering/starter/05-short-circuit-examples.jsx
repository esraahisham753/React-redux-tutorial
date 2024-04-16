import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h4>{text || 'Default Value'}</h4>
      {
        !text && <div>
          <h4>Whatever returned</h4>
          <h4>{name}</h4>
        </div>
      }
    </div>
  );
};

export default ShortCircuitExamples;
