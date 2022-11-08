import { useState, useEffect } from "react";

import { BeatLoader } from "react-spinners";

function useFetch(url) {
  const [data, setData] = useState(""); //if data is received => success
  const [loading, setLoading] = useState(false); //if data is received => success

  const [error, setError] = useState(false); //if data is received => success

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoading(false))
        .catch(setError());
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div>
        {<BeatLoader color="#36d7b7" size={20} speedMultiplier={2} />}
        {"   Loading data ... "}
      </div>
    );
  }

  if (error) {
    return <h1> Something went Wrong... </h1>;
  }
  if (data) {
    return data;
  }
  return (
    <>
      <h1>No DATA</h1>
    </>
  );
}

export default useFetch;
