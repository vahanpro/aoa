import React, { Component } from "react";
import "../styles/content.css"

class Content extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="about">
          <h1>Online Learning System</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
            <div className="searchCnt">
            <div className="posRel">
              <input type="search" placeholder="What do you want to learn?" />
              <button className="posAbs">find courses</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
