import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (! response.ok) {
        throw Error("Network request error");
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    };

    fetchData().then((user) => {
      console.log(user);
      setUser(user);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <section className="user">
      <h2 className='user__name'>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} className="user__avatar" />
      <p className="user_bio">{user.bio}</p>
      <p className="user__company">Works at: {user.company}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
