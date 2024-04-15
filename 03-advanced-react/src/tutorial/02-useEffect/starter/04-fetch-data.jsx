import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("The network response wasn't ok");
      }
      const jsonFormat = await response.json();
      return jsonFormat;
    };

    fetchData()
      .then((users) => {
        setUsers(users);
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="cards">
      <h1 className="cards__title">Github users</h1>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        console.log("name: ", login);
        return (
          <div className="card" key={id}>
            <img
              src={avatar_url}
              alt="Profile photo"
              width={100}
              height={100}
            />
            <div className="card__info">
              <h2 className="card__name">{login}</h2>
              <a href={html_url} className="card__link" target="_blank">
                Profile link
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default FetchData;
