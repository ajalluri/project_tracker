import React from 'react';
import SideNavBar from "../components/NavBar/SideNavBar"
import CreateProjectC from '../components/CreatProject/CreateProjectC';
import Header from '../components/NavBar/Header';
import "./CreateProject.css"
function CreateProject(){
    return (<div className='grid'>
        <SideNavBar activity='createproject' ></SideNavBar>
        <div>
        <Header></Header>
       <CreateProjectC></CreateProjectC>
       </div>

    </div>)
};

export default CreateProject;