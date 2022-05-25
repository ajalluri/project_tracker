import React from 'react';
import SideNavBar from "../components/NavBar/SideNavBar"
import IssueDetailsC from '../components/IssueDetails/IssueDetailsC';
import Header from '../components/NavBar/Header';
import "./IssueDetails.css"
function IssueDetails(){
    return (<div className='grid'>
        <SideNavBar activity='createproject' ></SideNavBar>
        <div>
        <Header></Header>
       <IssueDetailsC></IssueDetailsC>
       </div>

    </div>)
};

export default IssueDetails;