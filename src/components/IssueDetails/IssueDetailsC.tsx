import React from 'react';
import './IssueDetailsC';
import { useNavigate, useParams } from 'react-router-dom';

function IssueDetailsC() {
    const params = useParams();

  return <div className='idc'>Issue Details 
  
  
  <div>{params.id}</div>
  </div>;
}

export default IssueDetailsC;