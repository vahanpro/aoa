import React, { Component } from 'react';
import {database} from "../config/Fire"
import Loading from '../img/loading.svg';
import Tutor from './Tutor';
import '../styles/Tutors.css';

class Tutors extends Component {
  state = {
    tutorsList: null
  }
  componentDidMount() {
    database.ref( "/Tutors").on("value", (snapshot) => {
      this.setState({
        tutorsList: snapshot.val()
      })
    })
  }
  render() {
    const {tutorsList} = this.state;
    return (
      <div className="std-tutors-card">
        {tutorsList === null ? <img src={Loading} alt="Loading"/> : Object.keys(tutorsList).map(tutorList => (
        <Tutor details={tutorsList[tutorList]} key={tutorList}/> ))}
      </div>
    );
  }
}

export default Tutors;