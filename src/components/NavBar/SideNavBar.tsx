import React from 'react';
import "./SideNavBar.css"
import Icon from  "../../assets/Icon.svg"
import Language from "../../assets/Vector.svg"
interface Iprops {
    activity: string;
  }
  

function SideNavBar(props:Iprops){
    

        
        return (
          
            <div className='container'>
                <img src={Icon}></img>
               
             
               <div  className='fields'>
                <a href="/projectboard"><h1>Project Board</h1></a>
                <a href="/createissue"> <h1 >Create Issue</h1></a>
                <a href='/createproject'> <h1 >Create Project</h1></a>
                </div>
            {/* <div className="dropup">
            <button className="dropbtn">LANGUAGE</button>
            <div className="dropup-content">
                <a href="#">ENGLISH(EN)</a>
                <a href="#">HINDI(H1)</a>
                <a href="#">RUSSIAN(RU)</a>
            </div>
            </div> */}
      
        </div>
   
           
            
        )










        
       


        }

export default SideNavBar;