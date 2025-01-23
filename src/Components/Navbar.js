import React from 'react'
 import {  Link } from 'react-router-dom'

function Navbar() {
    
  return (
    <div>
    <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-item text-light" id="home-link" to="/">{"Home"}</Link>
                <ul className="navbar-nav me-auto d-flex flex-row">
                    <li className="nav-item me-2">
                        <Link className="text-light nav-link" to="nasa-picture" id="pictureday-link">{"NasaPicture"}</Link>
                    </li>
                    
                    <li className="nav-item me-2">
                        <Link className="text-light nav-link" to="objects" id="objects-link">{"NearEarthObject"}</Link>
                    </li>

                    <li className='nav-item me-2'> 
                    <Link className='text-light nav-link' to="mars-weather" id="">{"MarsWeather"}</Link>
                    </li>
                    <li className='nav-item me-2'> 
                    <Link className='text-light nav-link' to="mars-photos" id="">{"Image"}</Link>
                    </li>
                    <li className='nav-item me-2'> 
                    <Link className='text-light nav-link' to="map-asteroids" id="">{"Map-Asteroids"}</Link>
                    </li>
                </ul>

                    <Link exact to="/"> <button class="btn btn-outline-info ms-1" >LogOut</button></Link>
                 
              
            </div>
        </nav>
       

       
            
        </div> 
        

      

  )
  }

export default Navbar