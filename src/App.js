import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import NearEarthObject from './Components/NearEarthObject';
import NasaPicture from './Components/NasaPIcture';
import MarsWeather from './Components/MarsWeather';
import Image from './Components/Image';
import MapAsteroids from './Components/MapAsteroids';
import LandingPageNav from './Components/LandingPageNav';
import NASAImageLibrary from './Components/NasaImageLibrary';
import TrekMosaicsExplorer from './Components/TrekMosaicsExplorer';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPageNav} />
                <Layout>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/objects" component={NearEarthObject} />
                        <Route path="/nasa-picture" component={NasaPicture} />
                        <Route path="/mars-weather" component={MarsWeather} />
                        <Route path="/mars-photos" component={Image} />
                        <Route path="/map-asteroids" component={MapAsteroids} />
                        <Route path="/nasa-library" component={NASAImageLibrary} />
                        <Route path="/trek" component={TrekMosaicsExplorer} />
                    </Switch>
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;