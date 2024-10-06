import axios from "axios";

export const getWeather = async (city) => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
