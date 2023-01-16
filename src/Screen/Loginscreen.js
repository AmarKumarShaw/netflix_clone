import React, { useState } from 'react';
import "./Loginscreen.css"; 
import "./Signupscreen";
import Signupscreen from './Signupscreen';


function Loginscreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginscreen'>
      <div className="loginscreen__background">
        <img className='loginscreen__logo'
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        <button onClick={()=> setSignIn (true)} className='loginscreen_button'>Sign In</button>
        <div className="loginscreen_gradient" />
      </div>
      <div className="loginscreen__body">
        {signIn ? (
          <Signupscreen/>
        ) : (

         <>
         <h1>Unlimited films, TV programmes and more.</h1>
         <h2>Watch anywhere. Cancel at any time.</h2>
         <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

         <div className="loginscreen__input">
          <form>
            <input type="email"
            placeholder='Email Address'/>
            <button onClick={() => setSignIn(true)} 
            className='loginscreen__getstarted'>GET STARED</button>
          </form>
         </div>
         </>
        )}
      </div>
    </div>
  );
}

export default Loginscreen;