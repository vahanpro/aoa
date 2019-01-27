import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Courses from '../components/Courses';
import MyCourses from './MyCourses';
import Tutor from './Tutor';
import StudentSettings from "../components/StudentSettings"
import AllCourses from '../components/AllCourses';

class User extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/courses' component={Courses} />
          <Route path='/mycourses' component={MyCourses} />
          <Route path="/settings" component={StudentSettings} />
          <Route path='/tutors' component={Tutor} />
          <Route path="/allCourses" component = {AllCourses} />
          <Redirect to="/mycourses" />
        </Switch>
      </div>
    );
  }
}

export default User;