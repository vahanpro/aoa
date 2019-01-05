import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import Content from "./components/content";
import Container from "./components/container";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
