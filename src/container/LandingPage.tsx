import React from 'react';

import "./LandingPage.css"
import Icon from  "../assets/Icon.svg"

function LandingPage(){
    return (
        <div className='landing-page-grid'>
   
   <div className='side-nav'>
             <img src={Icon} alt="" />   
   </div>
      <div className="flex">
      <h1>Login</h1>
          <form action="">
              
              <div className='login-field '>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Enter your email address' />
              </div>
              <div className='login-field'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              </div>
              <div className='password-forgot'>
                  <p>Forgot Password</p>
              </div>
              <button type='submit'>Login</button>
          </form>

      </div>

 
    </div>
    )
};

export default  LandingPage;