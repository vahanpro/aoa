import React, { Component } from "react";
import "../styles/studentSettings.css"

class StudentProfile extends Component {
  state = {
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };
  render() {
    const { month } = this.state;
    return (
      <div className="mainProf">
        <form className="main-container">
          <div className="inputStyles">
            <div className="span">
              <span>First Name</span>
              <input type="text" />
            </div>
            <div className="span">
              <span>Last Name</span>
              <input type="text" />
            </div>
          </div>
          <div className="inputStyles">
          <div className="span">
              <span>Phone</span>
              <input type="text" />
            </div>
            <div className="span">
              <span>Specialization</span>
              <input type="text" />
            </div>
          </div>
          <div className="selectGender">
            <div className="selects">
              <div className="span">
                <span>Birthday</span>
                <div className="selects">
                  <input
                    className="day"
                    type="number"
                    min="1"
                    max="31"
                    defaultValue="1"
                  />
                  <select>
                    {month.map(months => (
                      <option key={months} value={months}>
                        {months}
                      </option>
                    ))}
                  </select>
                  <input
                    className="year"
                    type="number"
                    min="1910"
                    max="2019"
                    placeholder="year"
                    defaultValue="2019"
                  />
                </div>
              </div>
            </div>

            <div className="gender">
              <div className="span">
                <span>Gender</span>
              </div>
              <div className="selects">
                <button>Male</button>
                <button>Female</button>
              </div>
            </div>
          </div>
          <div className="countryNcity">
            <div className="country">
              <div className="span">
                <span>Country</span>
                <select className="selectCountry">
                  <option value="Armenia">Armenia</option>
                  <option value="Armenia">Russia</option>
                  <option value="Armenia">USA</option>
                </select>
              </div>
            </div>
            <div className="country">
              <div className="span">
                <span>City</span>
                <select className="selectCountry">
                  <option value="Armenia">Yerevan</option>
                  <option value="Armenia">Moscow</option>
                  <option value="Armenia">New York</option>
                </select>
              </div>
            </div>
          </div>
          <div className="saveBtn">
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentProfile;
