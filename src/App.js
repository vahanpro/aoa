import React, { Component } from 'react';
import Header from "./header"
import './App.css';
import Content from './content';
import Container from "./container"
import Footer from "./footer"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Container />
        <Footer/>
      </div>
    );
  }
}

export default App;
