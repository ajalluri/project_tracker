import React from 'react';
import SideNavBar from "../components/NavBar/SideNavBar"
import CreateIssueC from '../components/CreateIssue/CreateIssueC';
import Header from '../components/NavBar/Header';
import "./CreateIssue.css"
function CreateIssue(){
    return (<div className='issue-grid'>
    <SideNavBar activity='createproject' ></SideNavBar>
    <div>
    <Header></Header>
   <CreateIssueC></CreateIssueC>
   </div>
   </div>)
};

export default CreateIssue;