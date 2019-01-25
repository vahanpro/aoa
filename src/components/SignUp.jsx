import React, { Component } from "react";
import { connectTranslations } from "../context/TranslationContext";
import "../styles/signUp.css";
import fire from "../config/Fire";
import database from "../config/Fire"

class SignUp extends Component {
  state = {
    activeTutor: false,
    email: "",
    password: "",
    firstName: '',
    lastName: '',
    
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  signUp=(e)=>{
    e.preventDefault();
    fire
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
      console.log(user.user.uid);
      fire.database().ref('users/' + user.user.uid).set({
        firstName: this.state.firstName,
        email: this.state.email,
        lastName: this.state.lastName,
        id: user.user.uid,

      });
    })
    .catch(error => {
      console.log(error);
      this.setState({
        err: error.message,
        });
    });
}

  activateTutor = active => {
    this.setState(state => ({
      activeTutor: active
    }));
  };

  render() {
    const { texts } = this.props;
    const { activeTutor, email, password } = this.state;
    return (
      <div className="signUp-main" onClick={e => e.stopPropagation()}>
        <form className="btn-inp">
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
            <input onChange={this.handleChange} name="firstName" type="text" placeholder={texts.header.firstName} />
            <input onChange={this.handleChange} name="lastName" type="text" placeholder={texts.header.lastName} />
            <input
              type="text"
              onChange={this.handleChange}
              name="email"
              value={email}
              placeholder={texts.header.email}
            />
            <input
              type="password"
              onChange={this.handleChange}
              value={password}
              name="password"
              placeholder={texts.header.password}
            />
            <input type="password" placeholder={texts.header.confirmPass} />
            <button type="submit" onClick={this.signUp}>
              {texts.header.register}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connectTranslations(SignUp);
