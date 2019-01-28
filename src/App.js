import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import Loading from "./img/loading.svg";
import Content from "./components/content";
import Container from "./components/container";
import Footer from "./components/footer";
import { Route, Redirect } from "react-router-dom";
import { connectTranslations } from "./context/TranslationContext";
import fire from "./config/Fire";
import StudentProfile from "./components/Student";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Courses from "./components/Courses";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userLoaded: false
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ user, userLoaded: true });
      } else {
        this.setState({ user: null, userLoaded: true });
      }
    });
  }

  render() {
    return this.props.textLoaded && this.state.userLoaded ? (
      <div>
        {this.state.user ? (
          <StudentProfile />
        ) : (
          <>
            <Header />
            <Route
              path="/"
              exact
              render={props => (
                <>
                  <Content />
                  <Container />
                </>
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/courses" component={Courses}/>
            <Redirect to ="/"/>
            <Footer />
          </>
        )}
      </div>
    ) : (
      <div className="loading">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }
}

export default connectTranslations(App);
