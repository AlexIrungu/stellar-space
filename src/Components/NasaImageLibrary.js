import React, { useState, useEffect } from 'react';

function NASAImageLibrary() {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('mars');
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`);
            const data = await response.json();
            setImages(data.collection.items.slice(0, 12)); // Limit to 12 images
        } catch (error) {
            console.error('Error fetching NASA images:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchImages();
    };

    return (
        <div className="container mx-auto px-4 py-16 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
                NASA Image Library
            </h1>

            <form onSubmit={handleSearch} className="mb-8 flex justify-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search NASA images"
                    className="p-2 w-full max-w-md rounded-l-lg bg-gray-700 text-white"
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </form>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((item, index) => {
                        const imageUrl = item.links?.[0]?.href;
                        const title = item.data?.[0]?.title || 'Untitled NASA Image';

                        return imageUrl ? (
                            <div 
                                key={index} 
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
                            >
                                <img 
                                    src={imageUrl} 
                                    alt={title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-white font-semibold truncate">{title}</h3>
                                </div>
                            </div>
                        ) : null;
                    })}
                </div>
            )}
        </div>
    );
}

export default NASAImageLibrary;