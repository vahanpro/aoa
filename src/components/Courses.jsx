import React, { Component } from "react";
import Course from "./Course";
import {database} from "../config/Fire"
import Loading from "../img/loading.svg"
import { NavLink } from 'react-router-dom';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null,
    }
  }

  componentDidMount(){
    database.ref("/Courses").on("value", (snapshot) => {
      this.setState({
        courseList: snapshot.val(),
      })
    })
  }
 
  render() {
    const {courseList} = this.state
    return (
      <div className="std-courses">
<<<<<<< HEAD
      <div className="course">
        {courseList === null? <img src={Loading} alt="Loading"/>: Object.keys(courseList).map(course => (
          <Course key={course} details={courseList[course]} />
        ))}
=======
        <div className="course">
          {courseList === null? <img src={Loading} alt="Loading"/>: Object.keys(courseList).map(course => (
          < NavLink key={course}   to="/allCourses"> <Course details={courseList[course]} /> </NavLink>
          ))}
>>>>>>> origin/suro
        </div>
      </div>
    );
  }
}

export default Courses;
