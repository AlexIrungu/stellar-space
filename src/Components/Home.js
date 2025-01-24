import React from "react";
import Pexels from '../assets/Pexels-video.mp4'

function Home(){
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0">
                <video 
                    className="absolute w-full h-full object-cover"
                    src={Pexels} 
                    autoPlay 
                    loop 
                    muted 
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-6 animate-fade-in">
                    STELLAR SPACE
                </h1>
                <div className="max-w-2xl space-y-4">
                    <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-in-delay">
                        A platform where space activities and features are displayed
                    </p>
                    <p className="text-base md:text-lg font-light leading-relaxed opacity-80 animate-fade-in-delay-2">
                        We believe that this application will be very helpful in terms of providing knowledge
                        on matters of space activities and features as well as contribute 
                        in space exploration.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Home;