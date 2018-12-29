import React from 'react';


const SignIn = () => {
  return (
    <div className="sign" onClick={e => e.stopPropagation()}>
      <form onSubmit>
        <h1>Sign In</h1>
        <div className="inputs">
        <input type="text" placeholder="    Username" />
        <input type="password" placeholder="    Password" />
        <input type="submit" value="Sign In" className="submit"/>
        </div>
        <div className="forgot-pass">
        <a href="#">Fogot Password?</a>
        <a href="#">Sign Up Here</a>
        </div>
       
      </form>
    </div>
  );
};

export default SignIn;
