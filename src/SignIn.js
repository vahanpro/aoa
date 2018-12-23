import React from 'react';
import "./Sign.css";

const SignIn = () => {
  return (
    <div className="sign">
      <form>
        <h1>Sign In</h1>
        <input type="text" placeholder="    Username" className="inputs" />
        <input type="password" placeholder="    Password" className="inputs"/>
        <input type="submit" value="Sign In" className="submit"/><br/>
        <a href="#"  className="f">Fogot Password?</a>
        <a href="#" className="a">Sign Up Here</a>
      </form>
    </div>
  );
};

export default SignIn;
