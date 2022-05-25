import React from 'react';
import "./Header.css"
import Profile from "../../assets/Profile.svg"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../redux/store"
function Header(){
    

    const logged = useSelector((state: RootState) => state.login.loggedIn)
    
    const username = useSelector((state: RootState) => state.login.username)
    const userid = useSelector((state: RootState) => state.login.userid)

        
        return (
            
            
            <div className='header '>
                <span>
                <h1>{username}</h1>
             <img src={Profile} alt="" />
                </span>
            
            
            </div>
         
        )










        
       


        }

export default Header;