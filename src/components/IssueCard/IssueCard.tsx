import React from 'react';
import './IssueCard.css';
import ICard from '../../interfaces/ICard';

function IssueCard(props:ICard) {

    let v = {
        1:"LOW",
        2:"MEDIUM",
        3:"HIGH"
    }

    let p :string  = "";
    if(props.priority===1)
    {
        p = "Low"
    }
    if(props.priority===2)
    {
        p = "Medium"
    }
    if(props.priority===3)
    {
        p = "High"
    }
  return(
  
  <div className='issuecard '>

      <div className='issuecard-flex'>
          <div>
              {props.id}
          </div>
          <div>
              {props.createdOn}
          </div>
          </div>
          
          <div className='name-summary'>
          <h1>{props.projectName}</h1>
          <p >
              {props.summary}
          </p>
          </div>

          <div className='issuecard-flex'>
          <div className='issucard-name'>
              {props.assigneename}
          </div>
          <div className='priority'>
              priority
          <button className='issucard-priority'>
              {p}
          </button>
          </div>
          </div>
      

  </div>);
}

export default IssueCard;