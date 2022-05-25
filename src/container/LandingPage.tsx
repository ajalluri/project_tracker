import React from 'react';

import "./LandingPage.css"
import Icon from  "../assets/Icon.svg"
import {loggedin,logout} from "../redux/login"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../redux/store"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LandingPage(){

    const navigate = useNavigate();

    const logged = useSelector((state: RootState) => state.login.loggedIn)
    
    const username = useSelector((state: RootState) => state.login.username)
    const userid = useSelector((state: RootState) => state.login.userid)
    const dispatch = useDispatch()



    function handleSubmit(event:any){
        event.preventDefault();
        console.log(event.target.elements.email.value) 
        console.log(event.target.elements.password.value)          
        axios({
            method: 'post',
            url: "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/auth/login",
            data: 
                {
                    email: event.target.elements.email.value,
                    password: event.target.elements.password.value
                }
          
          }).then((response)=>{
            
            console.log(response)
            if(response.status===200)
            {
              alert("logged in successfully")
              dispatch(loggedin({"userid":response.data.userId,"username":response.data.name}))
              
              navigate('/projectboard');
            }
            
          }).catch((e)=>alert("Wrong Credentials"))
      }
      
    return (
        <div className='landing-page-grid'>
   
   <div className='side-nav'>
             <img src={Icon} alt="" />   
   </div>
      <div className="flex">
      <h1>Login</h1>
          <form  onSubmit={handleSubmit}>
              
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