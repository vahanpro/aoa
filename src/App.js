import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import Content from "./components/content";
import Container from "./components/container";
import Footer from "./components/footer";
import Student from "./components/StuentProfile"

class App extends Component {
  render() {
    return (
      <div>
        {/* <Student/> */}
        <Header />
        <Content />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
