import React, { Component } from "react";
import avatar from "../img/avatar.png";
import "../styles/container.css"
import left from "../img/leftarrow.png";
import right from "../img/arrowright.png";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h2>Popular Subjects</h2>
        <div className="imgRow">
          <div className="subOne subjects">
            <div className="shadow shadow1">
              <h3>Computer Science</h3>
            </div>
          </div>
          <div className="subTwo subjects">
            <div className="shadow shadow2">
              <h3>Language</h3>
            </div>
          </div>
        </div>

        <div className="imgRow">
          <div className="subThree subjects">
            <div className="shadow shadow3">
              <h3>Engineering</h3>
            </div>
          </div>

          <div className="subFour subjects">
            <div className="shadow shadow2">
              <h3>Management</h3>
            </div>
          </div>
        </div>
        <div>
          <button className="browseBtn">Browse Courses and Programs</button>
        </div>

        <div className="feedback">
          <h2>What they say</h2>
          <div className="card card-4">
            <div>
              <img src={avatar} alt="" />
            </div>
            <div className="about-user">
              <h3>Susan Mckartney</h3>
              <span>Student</span>
              <p>
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="arrows">
            <div className="arrow arrow-left">
              <img src={left} alt="Left" />
            </div>
            <div className="arrow arrow-right">
              <img src={right} alt="Left" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
