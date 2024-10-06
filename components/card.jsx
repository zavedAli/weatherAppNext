"use client";
import { FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Card } from "flowbite-react";
const card = ({ weather }) => {
  console.log(weather);
  if (weather) {
    return (
      <>
        <div className="weather flex justify-center">
          <div className="card my-9 mx-2 w-[25%] rounded-3xl border font-medium bg-[#e1f6fc] hover:shadow-lg">
            <div className="heading flex w-[100%] justify-between p-5">
              <h3>{weather.name}</h3>
              <h3>21:32</h3>
            </div>
            <div className="temp mb-2 mt-4 flex flex-col justify-center text-center text-5xl font-thin">
              <span> {weather.main.temp}</span>
              <span className="text-sm font-semibold text-[grey]">
                {weather.weather[0].description}
              </span>
            </div>
            <div className="other flex justify-center items-center p-2 gap-3">
              <div className="wind flex flex-col text-slate-600 p-5">
                <span className="flex items-center gap-4">
                  <FaWind />
                  40 km/h
                </span>
                <span className="flex items-center gap-4">
                  <FaDroplet />
                  84%
                </span>
                <span className="flex items-center gap-4">
                  <IoSettings />
                  0.2h
                </span>
              </div>
              <div className="logo w-[50%]">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card m-9 w-[25%] rounded-3xl border font-medium bg-[#e1f6fc] hover:shadow-lg">
            <div className="heading flex w-[100%] justify-between p-5">
              <h3>{weather.name}</h3>
              <h3>21:32</h3>
            </div>
            <div className="temp mb-2 mt-4 flex flex-col justify-center text-center text-5xl font-thin">
              <span> {weather.main.temp}</span>
              <span className="text-sm font-semibold text-[#396b79]">
                {weather.weather[0].description}
              </span>
            </div>
            <div className="other flex justify-center items-center p-2 gap-3">
              <div className="wind flex flex-col text-slate-600 p-5">
                <span className="flex items-center gap-4">
                  <FaWind />
                  40 km/h
                </span>
                <span className="flex items-center gap-4">
                  <FaDroplet />
                  84%
                </span>
                <span className="flex items-center gap-4">
                  <IoSettings />
                  0.2h
                </span>
              </div>
              <div className="logo w-[50%]">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Search city</h1>;
  }
};

export default card;
