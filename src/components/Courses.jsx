import React, { Component } from "react";
import Course from "./Course";
import {database} from "../config/Fire"
import Loading from "../img/Loading.svg"

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null
    }
  }

  componentDidMount(){
    database.ref("/Courses").on("value", (snapshot) => {
      this.setState({
        courseList: snapshot.val()
      })
    })
  }

  render() {
    const {courseList} = this.state
    
    return (
      <div className="std-courses">
      <div className="course">
        {courseList === null? <img src={Loading} alt="Loading"/>: Object.keys(courseList).map(course => (
          <Course key={course} details={courseList[course]} />
        ))}
        </div>
      </div>
    );
  }
}

export default Courses;
