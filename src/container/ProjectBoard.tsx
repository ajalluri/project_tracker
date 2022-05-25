import React from 'react';
import SideNavBar from "../components/NavBar/SideNavBar";
import ProjectBoardC from '../components/ProjectBoardC/ProjectBoardC';
import Header from '../components/NavBar/Header';
import "./ProjectBoard.css"
function ProjectBoard(){
    return (<div className='project-board'>
    <SideNavBar activity='project-board' ></SideNavBar>
    <div>
    <Header></Header>
   <ProjectBoardC></ProjectBoardC>
   </div>

</div>)
};

export default ProjectBoard;