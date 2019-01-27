import React, { Component } from "react";
import MyCourse from "./MyCourse";
import CourseList from "./MyCourseObj";
import '../styles/mycourses.css';

class MyCourses extends Component {
  render() {
    return (
      <div className="std-mycourses">
        {Object.keys(CourseList).map(course => (
          <MyCourse key={course} details={CourseList[course]} />
        ))}
      </div>
    );
  }
}

export default MyCourses;
