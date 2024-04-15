import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (! response.ok) {
        throw Error("The network response wasn't ok");
      }
      const jsonFormat = await response.json();
      return jsonFormat;   
    }

    fetchData().then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return <h2>fetch data example</h2>;
};
export default FetchData;
