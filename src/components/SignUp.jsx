import React, { Component } from "react";
import { connectTranslations } from "../context/TranslationContext";
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
    const { texts } = this.props;
    const { activeTutor } = this.state;
    return (
      <div className="signUp-main" onClick={e => e.stopPropagation()}>
        <div className="btn-inp">
          <div className="head">
            <h3>{texts.header.register}</h3>
          </div>
          <div className="headBtn">
            <button
              onClick={e => this.activateTutor(false)}
              className="studBtn"
              style={{ color: activeTutor ? "black" : "" }}
            >
              {texts.header.asStudent}
            </button>
            <button
              onClick={e => this.activateTutor(true)}
              style={{ color: activeTutor ? "green" : "" }}
            >
              {texts.header.asTutor}
            </button>
          </div>
          <div className="signUp-inputs">
            <input type="text" placeholder={texts.header.firstName} />
            <input type="text" placeholder={texts.header.lastName} />
            <input type="text" placeholder={texts.header.email} />
            <input type="password" placeholder={texts.header.password} />
            <input type="password" placeholder={texts.header.confirmPass} />
            <button>{texts.header.register}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connectTranslations(SignUp);
