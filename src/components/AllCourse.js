import React, { Component } from 'react';
import '../styles/AllCourses.css';

class AllCourse extends Component {
  render() {
    const {image,name,price,subject,length,language,level} = this.props.details;
    return (
      <div className="allcourse-card">
        <img src={image} alt="Img"/>
        <p className="courseName">{name}</p>
        <p className="coursePrice">{price}</p>
        <p className="p">Subject: {subject}</p>
        <p className="p">Time: {length}</p>
        <p className="p">Language: {language}</p>
        <p className="p">Level: {level}</p>
      </div>
    );
  }
}

export default AllCourse;