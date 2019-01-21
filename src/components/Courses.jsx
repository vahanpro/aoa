import React, { Component } from "react";
import Course from "./Course";
import CourseList from "./CourseObj";

class Courses extends Component {

  render() {
    console.log(CourseList);
    return (
      <div className="std-courses">
      <div className="course">
        {Object.keys(CourseList).map(course => (
          <Course key={course} details={CourseList[course]} />
        ))}
        </div>
      </div>
    );
  }
}

export default Courses;
