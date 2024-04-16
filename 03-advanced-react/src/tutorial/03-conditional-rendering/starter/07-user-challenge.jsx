import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      name: 'Esraa'
    });
  };

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <section>
      {user ? (
        <div>
          <h2>Hello, {user.name}</h2>
          <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please, login</h2>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      )}
    </section>
  );
};

export default UserChallenge;
