import React, { Component } from "react";
import "../styles/AllCourses.css";
import { NavLink } from "react-router-dom";

class AllCourse extends Component {
  handleClick = () => {
    console.log("hello");
  };
  render() {
    const { image, name, subject, length } = this.props.details;
    return (
      <NavLink to={`/mycourses/${this.props.id}`}>
        <div className="allcourse-card">
          <img src={image} alt="Img" />
          <p className="courseName">{name}</p>
          <p className="p">Subject: {subject}</p>
          <p className="p">Length: {length}</p>
        </div>
      </NavLink>
    );
  }
}

export default AllCourse;
