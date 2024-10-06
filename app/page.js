"use client";
import { useState } from "react";
import { getWeather } from "../lib/weather";
import { Button, TextInput } from "flowbite-react";
import Card from "../components/card";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSearch = async () => {
    if (!city) {
      alert("field cannot be emoty");
    } else {
      setIsProcessing(true);
      const data = await getWeather(city);
      setWeather(data);
      console.log(data);
      setIsProcessing(false);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-wrap gap-2 w-[100vw] m-auto justify-center">
        <TextInput
          className="w-[50vw]"
          id="input-gray"
          required
          color="gray"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <Button
          size="md"
          isProcessing={isProcessing}
          pill
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {/* 
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )} */}
      <div className="flex flex-wrap gap-2 w-[100vw] m-auto justify-center">
        <Card weather={weather} />
      </div>
    </div>
  );
}
