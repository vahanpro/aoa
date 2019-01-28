import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Courses from '../components/Courses';
import MyCourses from './MyCourses';
<<<<<<< HEAD
import Tutor from './Tutor';
import StudentSettings from "../components/StudentSettings";
import AboutCourse from "./AboutCourse";
=======
import Tutors from '../components/Tutors';
import StudentSettings from "../components/StudentSettings"
import AllCourses from '../components/AllCourses';
>>>>>>> origin/Arsen-dev

class User extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/courses' component={Courses} />
          <Route exact path='/mycourses' component={MyCourses} />
          <Route path="/settings" component={StudentSettings} />
<<<<<<< HEAD
          <Route path='/tutors' component={Tutor} />
          <Route path='/mycourses/:id' component={AboutCourse} />
=======
          <Route path='/tutors' component={Tutors} />
          <Route path="/allCourses" component = {AllCourses} />
>>>>>>> origin/Arsen-dev
          <Redirect to="/mycourses" />
        </Switch>
      </div>
    );
  }
}

export default User;