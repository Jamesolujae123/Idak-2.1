import logo from "../src/assets/logo 1.png";
import {Link, useNavigate} from 'react-router-dom'
import './nav.css'
import Signin from "./Signin";



function Nav() {

   const navigateto = useNavigate();

    return (
        <>
    
        <div className="Top-nav">
            <div className="nav-img">
                <img className="idak-pic" src={logo} alt="idak-pic" />
            </div>
            <div className="nav-links" id="head-links">
                <a href="/">Home</a>
                <a href="#">Rentals</a>
                <a href="#">Categories</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
            <div className="cont-3">    <div className="sign-in" onClick={() => navigateto("/signin")} >
            <i class="fa-regular fa-user"></i>
               <a>Sign in</a>  
            </div>
            <div className="dropdown"><a href="#" class="fa-solid fa-bars" ></a></div>
            <div className="p-list"><button className="posts-lit"><i class="fa-solid fa-plus"></i> Post Listing</button></div>
        </div>
        </div>
        </>
        
    )
}



export default Nav;