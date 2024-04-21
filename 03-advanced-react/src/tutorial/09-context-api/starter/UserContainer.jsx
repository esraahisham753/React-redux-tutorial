import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const {user, login, logout} = useAppContext();

  return (
    <>
      {user ? (
        <div className="navbar__user">
          <span>Hi there, {user.name}</span>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div className="navbar__user">
          <span>Please, login</span>
          <button type="button" className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </>
  );
};

export default UserContainer;
