import React, { useEffect, useState } from "react";

function MarsWeather() {
  const [marsWeatherData, setMarsWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=VI5CvDgJOt8j8mMVZ9NPoRMYJ1LbndXqxLDpFhzK&feedtype=json&ver=1.0"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Mars Weather Data:", data);
        setMarsWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching Mars weather data:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <div className="bg-red-100 p-4 text-red-700">
        Error loading Mars weather data: {error.message}
      </div>
    );
  }

  if (!marsWeatherData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
        Mars Weather
      </h1>
      <div className="overflow-x-auto shadow-2xl rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">Sol</th>
              <th className="px-6 py-3">Temperature</th>
              <th className="px-6 py-3">Pressure</th>
              <th className="px-6 py-3">Wind Speed</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(marsWeatherData).filter(key => key !== 'validity_checks').map((sol) => (
              <tr
                key={sol}
                className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600 transition-colors"
              >
                <td className="px-6 py-4">{sol}</td>
                <td className="px-6 py-4">
                  {marsWeatherData[sol]?.AT?.av ? 
                    `${marsWeatherData[sol].AT.av.toFixed(1)}°C` : 
                    'N/A'}
                </td>
                <td className="px-6 py-4">
                  {marsWeatherData[sol]?.PRE?.av ? 
                    `${marsWeatherData[sol].PRE.av.toFixed(1)} Pa` : 
                    'N/A'}
                </td>
                <td className="px-6 py-4">
                  {marsWeatherData[sol]?.HWS?.av ? 
                    `${marsWeatherData[sol].HWS.av.toFixed(1)} m/s` : 
                    'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarsWeather;