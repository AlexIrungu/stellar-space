import React from "react";

function MapAsteroids() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <iframe
        className="w-full h-[80vh] rounded-lg shadow-2xl"
        seamless
        src="https://eyes.nasa.gov/apps/asteroids/"
      />
    </div>
  );
}

export default MapAsteroids;