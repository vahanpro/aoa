import React, { Component } from 'react';
import AOA1 from "../img/AOA1.png";
import Modal from "./signModal"

const search = require("../assets/search.svg")

class Header extends Component {
    
    state = {
        show: false
    }

    showModal = () => {
        this.setState(state => ({
            show: !state.show
        }))
    }


    render() { 
        const show = this.state.show;
        console.log(this.state.show)
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
                                <a onClick={this.showModal}>Sign in</a>
                                < Modal onClose={this.showModal} show={show}>
                                </ Modal>
                                <a href="#Courses" className="regBtn">Register</a>
                            </div>
                           
                    </div>
            </div>
         );
    }
}
 
export default Header;