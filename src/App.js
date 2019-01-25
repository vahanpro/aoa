import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import Loading from "./img/loading.svg";
import Content from "./components/content";
import Container from "./components/container";
import Footer from "./components/footer";
import { Route } from "react-router-dom";
import { connectTranslations } from "./context/TranslationContext";
import fire from "./config/Fire";
import StudentProfile from "./components/Student";
import Contact from './components/Contact'
import SignUp from "./components/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return this.props.textLoaded ? (
      <div>
        {this.state.user ? (
         <Route path="/courses" render ={<StudentProfile />}>
              
         </Route>
                
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
            <Route path='/contact' component={Contact}/>
            <Route path = '/signUp' component= {SignUp}/>
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
