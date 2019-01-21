import React, { Component } from 'react';
import Logo from "../img/AOA1.png"
import "../styles/studentProfile.css"
import Book from "../img/open-book.svg"
import NoteBook from "../img/notebook.svg"
import Male from "../img/male.svg"
import fire from "../config/Fire"

class Student extends Component {
    state = {  }

    logout = () => {
        fire.auth().signOut();
    }

    render() { 
        return ( 
            <div>
                <div className="std-header">
                    <div>
                        <img src={Logo} style={{width: "75px", height: "50px"}} alt="Logo"/>
                    </div>
                    <div className ="page-nav">
                        <div><img src={Book} alt="book"/> Courses</div>
                        <div><img src={Male} alt="book"/> Tutors</div>
                        <div><img src={NoteBook} alt="book"/> My courses</div>
                    </div>
                    <div>
                        <div>
                            <img style={{width: "75px", height: "50px"}} src={Logo} alt="Logo"/>
                        </div>
                        <button onClick = {this.logout}>Logout</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Student;