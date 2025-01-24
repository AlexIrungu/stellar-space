import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pexels from '../assets/Pexels-video.mp4';

function LandingPageNav() {
    const [isVideoMuted, setIsVideoMuted] = useState(true);

    const toggleVideoSound = () => {
        setIsVideoMuted(!isVideoMuted);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            <video 
                autoPlay 
                loop 
                muted={isVideoMuted} 
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={Pexels} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <nav className="relative z-20 container mx-auto flex justify-between items-center p-4">
                <Link 
                    to="/home" 
                    className="text-white text-4xl font-extrabold tracking-wider 
                    bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    animate-pulse hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    STELLAR SPACE
                </Link>
                
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={toggleVideoSound}
                        className="text-white bg-gray-800/50 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                    >
                        {isVideoMuted ? '🔇' : '🔊'}
                    </button>

                    <Link 
                        to="/home" 
                        className="px-8 py-3 text-lg font-bold 
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white rounded-full 
                        hover:from-blue-700 hover:to-purple-700 
                        transform hover:-translate-y-1 
                        transition-all duration-300 ease-in-out 
                        shadow-2xl hover:shadow-blue-500/50 
                        animate-bounce-slow"
                    >
                        Discover Now
                    </Link>
                </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4 z-20 bg-black/30">
                <p className="text-xl font-light animate-pulse">
                    Explore the Cosmos, One Click at a Time
                </p>
            </div>
        </div>
    );
}

export default LandingPageNav;