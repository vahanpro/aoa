import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Courses from '../components/Courses';
import MyCourses from './MyCourses';
import Tutor from './Tutor';
import StudentSettings from "../components/StudentSettings"

class User extends Component {
  render() {
    return (
      <div>
        <Route path ='/courses' component={Courses}/>
        <Route path ='/mycourses' component={MyCourses}/>
        <Route path ="/settings" component = {StudentSettings}/>
        <Route path ='/tutors' component={Tutor}/>   
      </div>
    );
  }
}

export default User;