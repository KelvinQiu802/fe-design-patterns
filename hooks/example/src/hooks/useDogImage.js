import React from 'react';
import axios from 'axios';

export default function () {
  const [dogs, setDogs] = React.useState([]);

  React.useEffect(() => {
    async function fetchDog() {
      const result = await axios.get(
        'https://dog.ceo/api/breed/labrador/images/random/6'
      );
      setDogs(result.data.message);
    }
    fetchDog();
  }, []);

  return dogs;
}
