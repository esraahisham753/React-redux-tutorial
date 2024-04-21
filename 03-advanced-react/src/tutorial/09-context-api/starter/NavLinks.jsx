import UserContainer from "./UserContainer";

const NavLinks = () => {
  const pages = ["Home", "about"];

  return (
    <>
      <ul className="navbar__links">
        <li className="navbar__link navbar__link--brand">
          <a href="#">Context API</a>
        </li>
        {pages.map((page) => (
          <li className="navbar__link" key={page}>
            <a href="#">{page}</a>
          </li>
        ))}
      </ul>
      <UserContainer />
    </>
  );
};

export default NavLinks;
