import React, { useEffect, useState } from 'react';

function Image() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=q5mTMzWqXo8smTMCiDc1ma31hCVuzSKJ4EZMXfyT'
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
        Mars Rover Photos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <img
              src={photo.img_src}
              alt="pic"
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image;