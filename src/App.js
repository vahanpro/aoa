import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import Loading from "./img/loading.svg"
import Content from "./components/content";
import Container from "./components/container";
import Footer from "./components/footer";
import { Route } from "react-router-dom";
import { connectTranslations } from "./context/TranslationContext";


class App extends Component {
  render() {
    return this.props.textLoaded ? (
      <div>
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
        <Footer />
      </div>
    ) : <div className = "loading"><img src = {Loading} alt = "Loading"></img></div>;
  }
}

export default connectTranslations(App);
