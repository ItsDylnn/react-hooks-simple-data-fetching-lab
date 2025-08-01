import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return <img src={image} alt="A Random Dog" />;
}

export default App;
