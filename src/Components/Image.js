import React , {useEffect, useState} from 'react'

function Image() {
    const [photos,setPhotos]=useState([]);
    useEffect(()=>{
            fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=q5mTMzWqXo8smTMCiDc1ma31hCVuzSKJ4EZMXfyT")
            .then((res)=>res.json())
            .then((data)=>{
                setPhotos(data.photos);
                console.log(data)
            });
    },[]);
  return (
    <div>
      <div className="backgroung-image"></div>
    <h1>MARS ROVER PHOTOS</h1>
    { photos.map((photo)=>
        <img src={photo.img_src} alt="pic" id="pics"/>
         

    )}
    </div>
  )
}

export default Image


