import React, { useEffect, useState } from "react";

function NearEarthObject() {
    const [nearEarth, setNearEarth] = useState([]);

    useEffect(() => {
        fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=VI5CvDgJOt8j8mMVZ9NPoRMYJ1LbndXqxLDpFhzK")
        .then(res => res.json())
        .then(data => {
            setNearEarth(data.near_earth_objects['2015-09-08'])
        })
        .catch(error => console.error("Error fetching NASA NEO data:", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-blue-600 text-white text-center py-16">
                    <h1 className="text-3xl font-bold">Stellar Space Activity</h1>
                </div>
                <div className="p-4">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-blue-100">
                                <tr>
                                    <th className="p-3 text-left border">Max Diameter (km)</th>
                                    <th className="p-3 text-left border">NASA URL</th>
                                    <th className="p-3 text-left border">Velocity (km/s)</th>
                                    <th className="p-3 text-left border">Miss Distance</th>
                                    <th className="p-3 text-left border">Orbiting Body</th>
                                    <th className="p-3 text-left border">Reference ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nearEarth.map((item, index) => (
                                    <tr 
                                        key={item.neo_reference_id} 
                                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
                                    >
                                        <td className="p-3 border">
                                            {parseFloat(item.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)}
                                        </td>
                                        <td className="p-3 border">
                                            <a 
                                                href={item.nasa_jpl_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-blue-500 hover:underline"
                                            >
                                                View Details
                                            </a>
                                        </td>
                                        <td className="p-3 border">
                                            {parseFloat(item.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(2)}
                                        </td>
                                        <td className="p-3 border">
                                            {parseFloat(item.close_approach_data[0].miss_distance.astronomical).toFixed(4)}
                                        </td>
                                        <td className="p-3 border">
                                            {item.close_approach_data[0].orbiting_body}
                                        </td>
                                        <td className="p-3 border">
                                            {item.neo_reference_id}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NearEarthObject;