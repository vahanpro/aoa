import React, { Component } from "react";
import AOA1 from "../img/AOA1.png";
import Modal from "./Modal";
import "../styles/header.css";
import SignIn from "./SignIn";
import "../styles/Sign.css";
import SignUp from "./SignUp";
import { NavLink, Link } from "react-router-dom";
import { connectTranslations } from "../context/TranslationContext";

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
    const { texts } = this.props;
    return (
      <div className="head">
        <div className="navBar">
          <div className="img-logo">
            <Link to="/">
              <img src={AOA1} alt="AOA" className="logo" />
            </Link>
          </div>
          <div className="nav-bar">
            <input
              className="search"
              type="search"
              placeholder={texts.header.search}
            />
            <NavLink to="/courses">{texts.header.courses}</NavLink>
            <NavLink to="/programs">{texts.header.programs}</NavLink>
            <NavLink to="/contact">{texts.header.contact}</NavLink>
            <NavLink to="/signIn" onClick={this.showModal}>
              {texts.header.signIn}
            </NavLink>
            <a to="/signUp" onClick={this.showReg} className="regBtn">
              {texts.header.register}
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

export default connectTranslations(Header);
