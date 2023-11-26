import React from 'react';

function WeatherUI({ WeatherData }) {
    const temperatureInKelvin = WeatherData?.main?.feels_like;
    const temperatureInCelsius = (temperatureInKelvin - 273.15).toFixed(2);
    return (
        <div>
            {
                WeatherData?.weather ? (
                    <div className="bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400 w-full h-screen flex items-center justify-center">
                        <div className="bg-white p-4 px-8 bg-opacity-80 rounded-xl flex space-x-12 items-center shadow-md">
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} />
                                <p className="relative text-center text-gray-500 mt-1 font-bold text-sm">{WeatherData.weather[0].main}</p>
                            </div>
                            <div>
                                <p className="text-7xl font-bold text-center text-gray-900 py-4">{temperatureInCelsius}°C</p>
                                <p className="text-gray-500 text-sm text-center font-bold">{WeatherData.name}, {WeatherData.sys.country}</p>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default WeatherUI;
