import React, { Component } from "react";
import "../styles/mycourses.css";
import { NavLink } from "react-router-dom";

class MyCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.id);
    return (
    <NavLink to={`/mycourses/${this.props.id}`}>
        <div className="mycourse-card">
            <span style={{ background: `url(${this.props.details.image}` }} className="mycourse-card-img" />
              <div className="mycourse-card-sub">
                <p>{this.props.details.name}</p>
                <div className="mycourses-card-price">
                    {this.props.details.price}
                </div>
              </div>
        </div>
      </NavLink>
    );
  }
}

export default MyCourse;
