import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [hello, setHello] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`${process.env.HOSTNAME}/api`).then((res) =>
      res.text().then((data) => setHello(data))
    );

    fetch(`${process.env.HOSTNAME}/api/weather/current-weather`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: "strasbourg",
      }),
    }).then((res) => res.json().then((data) => setWeather(data)));
  }, [0]);

  return (
    <div>
      {hello ? <h1>{hello}</h1> : <span>loading...</span>}
      {weather ? (
        <span>
          Il fait actuellement {weather.current.temp_c}°C à{" "}
          {weather.location.name}
        </span>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
};

export default IndexPage;