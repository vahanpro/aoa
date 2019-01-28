import React, { Component } from 'react';
import '../styles/AllCourses.css';
import { NavLink } from "react-router-dom";

class AllCourse extends Component {
  handleClick = () => {
    console.log("hello");
  }
  render() {
    const {image,name,price,subject,length,language,level} = this.props.details;
    return (
      <NavLink to={`/mycourses/${this.props.id}`}>
        <div className="allcourse-card">
          <img src={image} alt="Img"/>
          <p className="courseName">{name}</p>
          <button onClick={this.handleClick}>Add To My Courses</button>
          <p className="p">Subject: {subject}</p>
          <p className="p">Time: {length}</p>
          <p className="p">Language: {language}</p>
          <p className="p">Level: {level}</p>
          <p className="coursePrice">{price}</p>
        </div>
      </NavLink>
    );
  }
}

export default AllCourse;