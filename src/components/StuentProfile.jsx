import React, { Component } from 'react';
import "../styles/studentProf.css"

class StudentProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ="mainProf">
                <form className ="main-container">
                    <input type="text" placeholder = "First Name"/>
                    <input type="text" placeholder = "Last Name"/>
                    <input type="text" placeholder = "First Name"/>
                    <input type="text" placeholder = "Last Name"/>
                    
                </form>
            </div>
         );
    }
}
 
export default StudentProfile;