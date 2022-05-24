import React from 'react';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import ProjectBoard from './container/ProjectBoard';
import CreateIssue from './container/CreateIssue';
import CreateProject from './container/CreateProject';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function App() {
  return (
    <Router>
      <div className='App'>
       
        <Routes>
          <Route
            path='/'
            element={<LandingPage ></LandingPage>}
          ></Route>
          <Route
            path='/projectboard'
            element={<ProjectBoard ></ProjectBoard>}
          ></Route>
          <Route
            path='/createissue'
            element={<CreateIssue ></CreateIssue>}
          ></Route>
          <Route
            path='/createproject'
            element={<CreateProject ></CreateProject>}
          ></Route>
           </Routes>
      </div>
    </Router>
  );
}

export default App;
