import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();

        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There is an Error</h2>;
  }

  const { avatar_url, login, bio, company } = user;

  return (
    <section className="user">
      <h1>Fetch Data</h1>
      <img
        src={avatar_url}
        alt={login}
        className="user__avatar"
        width={200}
        height={200}
      />
      <h2 className="user__name">{login}</h2>
      <p className="user__company">Works at: {company}</p>
      <p className="user__bio">{bio}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
