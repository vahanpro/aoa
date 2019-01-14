import React, { Component } from "react";
import { connectTranslations } from "../context/TranslationContext";
import "../styles/content.css";

class Content extends Component {
  render() {
    const { texts } = this.props;
    return (
      <div className="mainContent">
        <div className="about">
          <h1>{texts.content.title}</h1>
          <p>{texts.content.slogan}</p>
          <div className="searchCnt">
            <div className="posRel">
              <input type="search" placeholder={texts.content.findbtn}/>
              <button className="posAbs">{texts.content.find}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectTranslations(Content);
