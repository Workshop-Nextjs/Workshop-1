import axios from "axios";

export default async function handler(req, res) {
  const { city } = req.body;

  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=yes`
  );

  res.status(200).send(data);
}
