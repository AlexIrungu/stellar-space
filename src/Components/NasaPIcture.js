import React, { useEffect, useState } from "react";

function NasaPicture(){
    const [day, setDate] = useState("")
    const [description, setExplanation] = useState("")
    const [image, setMedia] = useState("")
    const [heading, setTitle] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=hKEJKzZbPu6bVkb5ZOywrpvfOiMg51NMxjzKbnKz")
        .then((res) => res.json())
        .then((data) => {
            setDate(data.date)
            setExplanation(data.explanation)
            setMedia(data.hdurl)
            setTitle(data.title)
            setIsLoading(false)
        })
        .catch((error) => {
            console.error("Error fetching NASA picture:", error)
            setIsLoading(false)
        })
    }, [])
    
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
            </div>
        )
    }

    return(
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <img 
                    src={image} 
                    alt={heading} 
                    className="w-full h-96 object-cover object-center"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-blue-400 mb-4">{heading}</h1>
                    <h3 className="text-sm text-gray-400 mb-2">{day}</h3>
                    <p className="text-white leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default NasaPicture