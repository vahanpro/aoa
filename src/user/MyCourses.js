import React, { Component } from "react";
import MyCourse from "./MyCourse";
import { database } from "../config/Fire";
import '../styles/mycourses.css';
import Loader from "../img/loading.svg";


class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state= {
      CourseList: null
    }
  }

  componentDidMount(){
    database.ref("/AllCourses").on("value", (snapshot) => {
      this.setState({
        CourseList: snapshot.val(),
      })
    })
  }

  render() {
    const {CourseList} = this.state
    return (
      <div className="std-mycourses">
        {CourseList === null ? (<img src ={Loader} alt="Loading" />): Object.keys(CourseList).map(course => (
            <MyCourse key={course} id={course} details={CourseList[course]} />
        ))}
      </div>
    );
  }
}

export default MyCourses;
