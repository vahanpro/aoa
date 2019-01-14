import React, { Component } from "react";
import "../styles/signUp.css";

class SignUp extends Component {
  state = {
    activeTutor: false
  };

  activateTutor = active => {
    this.setState(state => ({
      activeTutor: active
    }));
  };

  render() {
    const { activeTutor } = this.state;
    return (
      <div className="signUp-main" onClick={e => e.stopPropagation()}>
        <div className="btn-inp">
          <div className="head">
            <h3>Sign Up</h3>
          </div>
          <div className="headBtn">
            <button
              onClick={e => this.activateTutor(false)}
              className="studBtn"
              style={{ color: activeTutor ? "black" : "" }}
            >
              As Student
            </button>
            <button
              onClick={e => this.activateTutor(true)}
              style={{ color: activeTutor ? "green" : "" }}
            >
              As Tutor
            </button>
          </div>
          <div className="signUp-inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
