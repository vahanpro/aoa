import React, { Component } from "react";
import MyCourse from "./MyCourse";
import { database } from "../config/Fire";
import CourseList from "./MyCourseObj";
import '../styles/mycourses.css';

class MyCourses extends Component {
  render() {
    return (
      <div className="std-mycourses">
        {Object.keys(CourseList).map(course => (
            <MyCourse key={course} id={course} details={CourseList[course]} />
        ))}
      </div>
    );
  }
}

export default MyCourses;
