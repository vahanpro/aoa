import React from "react";
import { connectTranslations } from "../context/TranslationContext";

const SignIn = props => {
  const { texts } = props;
  return (
    <div className="sign" onClick={e => e.stopPropagation()}>
      <form onSubmit>
        <h1>{texts.header.signIn}</h1>
        <div className="inputs">
          <input type="text" placeholder= {texts.header.email} />
          <input type="password" placeholder={texts.header.password} />
          <input type="submit" value={texts.header.signIn} className="submit" />
        </div>
        <div className="forgot-pass">
          <a href="javasript:void">{texts.header.forgotPass}</a>
          <a href="javasript:void">{texts.header.registerHere}</a>
        </div>
      </form>
    </div>
  );
};

export default connectTranslations(SignIn);
