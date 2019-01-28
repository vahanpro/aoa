import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Courses from '../components/Courses';
import MyCourses from './MyCourses';
import Tutors from '../components/Tutors';
import StudentSettings from "../components/StudentSettings"
import AllCourses from '../components/AllCourses';
import AboutCourse from "./AboutCourse"

class User extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/courses' component={Courses} />
          <Route exact path='/mycourses' component={MyCourses} />
          <Route path="/settings" component={StudentSettings} />
          <Route path='/tutors' component={Tutors} />
          <Route path="/allCourses" component = {AllCourses} />
          <Route path="/mycourses/:id" component = {AboutCourse} />
          <Redirect to="/mycourses" />
        </Switch>
      </div>
    );
  }
}

export default User;