import React, { Component } from 'react';
import '../styles/Tutors.css';

class Tutor extends Component {
  render() {
    const {image,firstName,lastName,teaches,alsoKnows,language,level,aboutme,subject} = this.props.details;
    console.log(this.props.details);
    return (
      <div className="tutors-card">
        <img src={image} alt="TutorAvatar"/>
        <div className='tutor-card-main'>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>I`m teaching: {teaches}</p>
          <p>Also Know: {alsoKnows}</p>
          <p>Language: {language}</p>
          <p>Level: {level}</p>
          <p>Subject: {subject}</p>
        </div>
        <div className="aboutTutor">
          <p>About Me</p>
          <p>{aboutme}</p>
        </div>
        
        
      </div>
    );
  }
}

export default Tutor;