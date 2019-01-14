import React, { Component } from "react";
import AOA1 from "../img/AOA1.png";
import Modal from "./Modal";
import "../styles/header.css";
import SignIn from "./SignIn";
import "../styles/Sign.css";
import SignUp from "./SignUp";

const search = require("../assets/search.svg");

class Header extends Component {
  state = {
    show: false,
    showReg: false
  };

  showModal = () => {
    this.setState({
      show: true
    });
  };

  showReg = () => {
    this.setState({
      showReg: true
    });
  };

  closeAllModals = () => {
    this.setState({
      show: false,
      showReg: false
    });
  };

  render() {
    const { show, showReg } = this.state;
    console.log(this.state.show);
    return (
      <div className="head">
        <div className="navBar">
          <div className="img-logo">
            <img src={AOA1} alt="AOA" className="logo" />
          </div>
          <div className="nav-bar">
            <input className="search" type="search" placeholder="Search ..." />
            <a href="#Courses">Courses</a>
            <a href="#Courses">Programs</a>
            <a href="#Courses">Contact Us</a>
            <a onClick={this.showModal}>Sign in</a>
            <a onClick={this.showReg} href="#Courses" className="regBtn">
              Register
            </a>
            <Modal onClose={this.closeAllModals} show={show || showReg}>
              {show ? <SignIn /> : null}
              {showReg ? <SignUp /> : null}
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
