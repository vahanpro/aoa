import React, { Component } from 'react';
import {database} from "../config/Fire"
import Loading from '../img/loading.svg';
import AllCourse from './AllCourse';
import '../styles/AllCourses.css';
import goBack from '../img/goBackIcon.svg';
import {NavLink} from 'react-router-dom';

class AllCourses extends Component {
  state = {
    allCourseList: null
  }

  componentDidMount() {
    database.ref( "/AllCourses").on("value", (snapshot) => {
      this.setState({
        allCourseList: snapshot.val()
      })
    })
  }

  render() { 
    const {allCourseList} = this.state;
    return (
      <div className="std-allcourse-card">
        
        {allCourseList === null ? <img src={Loading} alt="Loading"/> : (
          <>
          <NavLink to='/courses'><div className="goBack"><img src={goBack} alt="goBack"/></div></NavLink>
          {Object.keys(allCourseList).map(allCourse => (
          <AllCourse details={allCourseList[allCourse]} id={allCourse} key={allCourse}/> ))}
          </>
        )}
      </div>
     );
  }
}
 
export default AllCourses;