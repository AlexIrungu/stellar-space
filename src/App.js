import React from 'react';
import './App.css';
import MarsWeather from './Components/MarsWeather';
import NasaPicture from './Components/NasaPIcture';
import NearEarthObject from './Components/NearEarthObject';
import Navbar from './Components/Navbar';
import Image from './Components/Image';
import Home from './Components/Home';
import MapAsteroids from './Components/MapAsteroids';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import LandingPageNav from './Components/LandingPageNav';
import { Switch,Route } from 'react-router-dom';


function App (){

return (
   <div>
   
    
   
    <Switch>
    <Route exact path="/">
        <LandingPageNav />
        <Home />
        </Route>
    <Route path="/home">
         <Navbar />
         <Home />
         </Route>
     <Route path="/login"> <LoginForm /></Route>
     <Route path="/signup"><SignUpForm /></Route>
    <Route path="/objects"> <NearEarthObject /></Route>
    <Route path="/nasa-picture"> <NasaPicture /></Route>
    <Route path="/mars-weather"><MarsWeather /></Route>
    <Route path="/mars-photos"><Image /></Route>
    <Route path="/map-asteroids"><MapAsteroids /></Route>
    {/* <Route exact path="/"><Home /></Route>
    <Route  path="/home"><Home /></Route> */}
    
    </Switch>
    </div>
)
}



export default App;
