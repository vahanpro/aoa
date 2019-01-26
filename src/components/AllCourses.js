import React, { Component } from 'react';
import {database} from "../config/Fire"

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
    console.log(this.state.allCourseList)
    return ( 
      <div>

      </div>
     );
  }
}
 
export default AllCourses;