import React, { Component } from 'react';


const logoAOA = require('../img/AOA1.png');
const earth = require('../assets/earth.svg');
const arrowdown = require('../assets/ArrowDown.svg');
const fb_icon = require('../assets/facebook_icon.svg');
const yt_icon = require('../assets/youtube_icon.svg');
const twitter_icon = require('../assets/twitter_icon.svg');
const in_icon = require('../assets/linkedin_icon.svg');

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerGrey">
          <div className="logonlang">
                <div className="logo">
                    <img src={logoAOA} className="logoaoa" alt="logo"/>
                </div>
                <div className="dropdown">
                    <img src={earth} className="earth" alt="earth-icon"/>
                        <p>English</p>
                        <img src={arrowdown} className="arrowdown" alt="arrowdown"/>
             </div>
        </div>
        <div className="list">
        <ul>
            <li style={{color: "rgb(100,102,100)", fontSize: "25px", fontWeight: "bold"}}>AOA</li>
            <li><a href="/#">About</a></li>
            <li><a href="">AOA for Business</a></li>
            <li><a href="">Affiliates</a></li>
            <li><a href="">Open AOA</a></li>
          </ul>
          <ul >
            <li style={{color: "rgb(100,102,100)", fontSize: "20px",fontWeight: "bold"}}>Legal</li>
            <li><a href="">Terms of Service </a></li>
            <li><a href="">Honor Code</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Accessibility Policy</a></li>
          </ul>
          <ul>
            <li style={{color: "rgb(100,102,100)", fontSize: "20px", fontWeight: "bold"}}>Connect</li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Help Center</a></li>
            <li><a href="">Media Kit</a></li>
          </ul>
        </div>
          <div className="icons">

          <a href=""><img src={fb_icon}  alt="icon"/></a>
          <a href=""><img src={yt_icon}  alt="icon"/></a>
          <a href=""><img src={twitter_icon}  alt="icon"/></a>
          <a href=""><img src={in_icon}  alt="in-icon"/></a>
          </div>
          
        </div>
        <div className="footerGreen">Copyright © 2018 AOA, Inc.</div>
      </div>
    );
  }
}

export default Footer;
