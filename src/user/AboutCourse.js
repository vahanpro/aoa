import React, { Component } from "react";
import "../styles/aboutCourse.css"
import CourseList from "./MyCourseObj";

class AboutCourse extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        const course = CourseList[this.props.match.params.id];
        return (
            <div>
                <div className="about-course">
                    <div className="aboutcourse-img">
                        <img src={course.image} alt="logo"/>
                    </div>
                    <div className="infoaboutcourse">
                        <h1 className="aboutcourse-name">{course.name}</h1>
                        <div className="course-intro">
                            {course.intro}
                        </div>
                    </div>
                </div>
                <div className="content-sidebar">
                    <div className="about-this-cours-content">
                        <div className="about-this-cours">
                            <h2>About this course</h2>
                        </div>
                        <div className="about-this-cours-text">
                            <p>{course.aboutthiscourse}</p>
                        </div>
                        <div className="you-will-learn">
                            <h2>What you'll learn</h2>
                        </div>
                        <div className="you-will-learn-texts">
                            <li>{course.youwilllearn1}</li>
                            <li>{course.youwilllearn2}</li>
                            <li>{course.youwilllearn3}</li>
                            <li>{course.youwilllearn4}</li>
                        </div>
                        <div className="tutor">
                            <h3>Tutor</h3>
                            <p>{course.tutor}</p>
                        </div>
                    </div>
                    <div className="about-cours-list">
                        <ul>
                            <li>Length: {course.length}</li>
                            <li>Effort: {course.effort}</li>
                            <li>Price: {course.price}</li>
                            <li>Subject: {course.subject}</li>
                            <li>Language: {course.language}</li>
                            <li>Tutor: {course.tutor}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutCourse;
