import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-black shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-colors">
          Stellar Space
        </Link>
        
        <div className="flex space-x-4 items-center">
          {[
            { to: "nasa-picture", label: "NASA Picture" },
            { to: "objects", label: "Near Earth Objects" },
            { to: "mars-weather", label: "Mars Weather" },
            { to: "mars-photos", label: "Mars Images" },
            { to: "map-asteroids", label: "Asteroid Map" },
            { to: "nasa-library", label: "NASA Image Library" },
            { to: "trek", label: "Trek Mosaics Explorer" }
          ].map(({ to, label }) => (
            <Link 
              key={to}
              to={to} 
              className="text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar