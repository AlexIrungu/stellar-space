import React from "react";
import { Link } from "react-router-dom";

function LandingPageNav(){
    return(
        <div>
             <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-item text-light" id="home-link" to="/">{"Home"}</Link>
               
                    <Link to="signup"> <button class="btn btn-outline-info ms-1" >SignUp</button></Link>
                   
                   <Link to="login"><button class="btn btn-outline-info ms-1">LogIn</button></Link> 
              
            </div>
        </nav>
        </div>
    )

}
export default LandingPageNav