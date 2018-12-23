import React, { Component } from 'react';
import AOA1 from "./img/AOA1.png";

const search = require("./assets/search.svg")

class Header extends Component {
    render() { 
        return ( 
            <div className="head">
                   <div className="navBar">
                   <div className="img-logo">
                             <img src={ AOA1 } alt="AOA" className="logo"/>
                       </div>
                            <div className="nav-bar">
                                <input className="search" type="search" placeholder="Search ..."/>
                                <a href="#Courses">Courses</a>
                                <a href="#Courses">Programs</a>
                                <a href="#Courses">Contact Us</a>
                                <a href="#Courses">Sign in</a>
                                <a href="#Courses" className="regBtn">Register</a>
                            </div>
                       
                    </div>
            </div>
         );
    }
}
 
export default Header;