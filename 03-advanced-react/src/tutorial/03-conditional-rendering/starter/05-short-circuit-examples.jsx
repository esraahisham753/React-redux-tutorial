import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      {user ? (
        <div>
          <h4>Hello there user: {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>Please, login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Whatever returned</h4>
      <h4>{name}</h4>
    </div>
  );
};

export default ShortCircuitExamples;
