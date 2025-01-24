import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mosaikData = {
    Moon: [
        { 
            name: 'LRO WAC Mosaic Global', 
            previewUrl: 'https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/preview.jpg',
            description: 'Lunar Reconnaissance Orbiter Wide Angle Camera Global Mosaic'
        }
    ],
    Mars: [
        { 
            name: 'Viking Color Mosaic', 
            previewUrl: 'https://trek.nasa.gov/tiles/Mars/Viking/preview.jpg',
            description: 'Global color map from Viking orbiter missions'
        },
        { 
            name: 'HiRISE Curiosity Landing Site', 
            previewUrl: 'https://trek.nasa.gov/tiles/Mars/HiRISE/Curiosity/preview.jpg',
            description: 'High-resolution imagery of Curiosity rover landing area'
        }
    ],
    Vesta: [
        { 
            name: 'Global LAMO Mosaic', 
            previewUrl: 'https://trek.nasa.gov/tiles/Vesta/LAMO/preview.jpg',
            description: 'Vesta global mosaic from Dawn mission Low Altitude Mapping Orbit'
        }
    ]
};

function TrekMosaicsExplorer() {
    const [selectedCategory, setSelectedCategory] = useState('Mars');
    const [selectedMosaic, setSelectedMosaic] = useState(null);
    const [mosaicDetails, setMosaicDetails] = useState(null);

    const fetchMosaicDetails = async (mosaic) => {
        setSelectedMosaic(mosaic);
        try {
            // Simulate API call - replace with actual NASA Trek API if available
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=VI5CvDgJOt8j8mMVZ9NPoRMYJ1LbndXqxLDpFhzK`);
            setMosaicDetails(response.data);
        } catch (error) {
            console.error('Error fetching mosaic details:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
                    NASA Trek Mosaics Explorer
                </h1>

                {/* Category Selector */}
                <div className="flex justify-center space-x-4 mb-8">
                    {Object.keys(mosaikData).map(category => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                selectedCategory === category 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Mosaics Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {mosaikData[selectedCategory].map((mosaic, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => fetchMosaicDetails(mosaic)}
                        >
                            <img 
                                src={mosaic.previewUrl} 
                                alt={mosaic.name} 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-blue-400 mb-2">
                                {mosaic.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {mosaic.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mosaic Details Modal */}
                {selectedMosaic && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                        <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-blue-400">
                                    {selectedMosaic.name} Details
                                </h2>
                                <button 
                                    onClick={() => setSelectedMosaic(null)}
                                    className="text-white bg-red-600 hover:bg-red-700 rounded-full p-2"
                                >
                                    Close
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <img 
                                    src={selectedMosaic.previewUrl} 
                                    alt={selectedMosaic.name} 
                                    className="w-full rounded-lg"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-400 mb-2">
                                        Mission Description
                                    </h3>
                                    <p className="text-gray-300">
                                        {selectedMosaic.description}
                                    </p>
                                    {mosaicDetails && (
                                        <div className="mt-4">
                                            <h4 className="text-lg font-semibold text-blue-400">
                                                Additional NASA Imagery
                                            </h4>
                                            <img 
                                                src={mosaicDetails.url} 
                                                alt={mosaicDetails.title} 
                                                className="w-full rounded-lg mt-2"
                                            />
                                            <p className="text-gray-300 mt-2">
                                                {mosaicDetails.explanation}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrekMosaicsExplorer;