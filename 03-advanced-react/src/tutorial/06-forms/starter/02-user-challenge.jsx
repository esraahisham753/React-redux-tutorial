import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = users[users.length - 1].id + 1;

    setUsers((currentState) => {
      return [...currentState, { id: newId, name: name }];
    });

    setName("");
  };

  const removeUser = (id) => {
    setUsers((currentState) => {
      return currentState.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div className="people">
        {users.map((person) => (
          <div className="person" key={person.id}>
            <h4>{person.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeUser(person.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserChallenge;
