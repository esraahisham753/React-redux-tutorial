import { useState } from "react";
import {data} from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form className="form">
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
        {
          data.map((person) => <h4 key={person.id}>{person.name}</h4>)
        }
      </div>
    </div>
  );
};
export default UserChallenge;
