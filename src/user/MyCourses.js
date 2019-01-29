import React, { Component } from "react";
import MyCourse from "./MyCourse";
import "../styles/mycourses.css";
import Loader from "../img/loading.svg";
import { ConnectToUser } from "../context/ConnectUser";

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CourseList: props.user.course || []
    };
  }

  componentDidMount() {}

  render() {
    const { CourseList } = this.state;
    return (
      <div className="std-mycourses">
        {CourseList === null ? (
          <img src={Loader} alt="Loading" />
        ) : (
          Object.keys(CourseList).map(course => (
            <MyCourse key={course} id={course} details={CourseList[course]} />
          ))
        )}
      </div>
    );
  }
}

export default ConnectToUser(MyCourses);
