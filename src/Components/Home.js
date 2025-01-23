import React from "react";

import Pexels from '../assets/Pexels-video.mp4'

function Home(){
    return (
        <div className="container">
            <div className="overlay">

            
            <video src={Pexels} autoPlay loop muted />
            <div className="content">
            <h1 >STELLAR SPACE</h1>
            <p>Its a platform where space activities and features are displayed</p>
            <p>We believe that this application will be very helpful in terms of providing knowledge
                on matters of space activities and features as well as contribute 
                in space exploration.
            </p>
            </div>
            </div>
          
           
        </div>
    )
}
export default Home