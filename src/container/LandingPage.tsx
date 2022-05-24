import React from 'react';

import "./LandingPage.css"

function LandingPage(){
    return <div className='landing-page grid'>
      <div className="flex">
          <form action="">
              <div>Login</div>
              <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              </div>
              <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              </div>
              <button type='submit'>Submit</button>
          </form>

      </div>

    </div>
};

export default  LandingPage;