import React, { Component } from 'react';
import Logo from "../img/AOA1.png"
import "../styles/studentProfile.css"
import Book from "../img/open-book.svg"
import NoteBook from "../img/notebook.svg"
import Male from "../img/male.svg"
import {NavLink} from 'react-router-dom';
import User from '../user/User';
import StudentSettings from './StudentSettings';
import App from '../App';

class Student extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="std-header">
                    <div>
                        <img src={Logo} style={{width: "75px", height: "50px"}} alt="Logo"/>
                    </div>
                    <div className ="page-nav">
                        <NavLink to='/courses'><div><img src={Book} alt="book"/> Courses</div></NavLink>
                        <NavLink to='/tutors'><div><img src={Male} alt="book"/> Tutors</div></NavLink>
                        <NavLink to='/mycourses'><div><img src={NoteBook} alt="book"/> My Courses</div></NavLink>
                    </div>
                    <User/>
                    <div>
                        <div>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <img style={{width: "75px", height: "50px"}} src={Logo} alt="Logo"/>
                                </button>
                                <div className="dropdown-content">
                                    <NavLink to='/' component={App}>Log Out</NavLink>
                                    <NavLink to='/settings' component={StudentSettings}>Settings</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Student;