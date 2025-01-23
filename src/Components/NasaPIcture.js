import React, { useEffect, useState } from "react";
import './NasaPicture.css'


function NasaPicture(){
    const [day, setDate] = useState([])
    const [description, setExplanation] = useState([])
    const [image, setMedia] = useState("")
    const [heading, setTitle] = useState([])

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=hKEJKzZbPu6bVkb5ZOywrpvfOiMg51NMxjzKbnKz")
        .then((res) => res.json())
        .then((data) => 
       { setDate(data.date)
        setExplanation(data.explanation)
        setMedia(data.hdurl)
        setTitle(data.title)}
        
        )

    }, [])
    // console.log(day);
    // console.log(description);
    // console.log(image);
    // console.log(heading);
    
   

    return(
        <div>
            <img src={`${image}`} id="picture" alt=""></img>
            <h1 className="header">{heading}</h1>
            <h2 className="describe">{description}</h2>
            <h3 className="date">{day}</h3>
        </div>
    )
}
export default NasaPicture