import React from 'react';
import './IssueCard.css';
import ICard from '../../interfaces/ICard';
import { Link } from 'react-router-dom';
function IssueCard(props:ICard) {

    let v = {
        1:"LOW",
        2:"MEDIUM",
        3:"HIGH"
    }
    let color:string = "";

    let p :string  = "";
    if(props.priority===1)
    {
        p = "Low"
        color = "green"
    }
    if(props.priority===2)
    {
        p = "Medium"
        color = "orange"
    }
    if(props.priority===3)
    {
        p = "High"
        color = "red"
    }
  return(
  
  <div className='issuecard '>
      <Link  style={{  textDecoration: 'none',color:"black"}} to= {`/issuedetails/${props.id}/${props.projectName}`} >
           
            

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
          <button className='issucard-priority' style={{backgroundColor:color}}>
              {p}
          </button>
          </div>
          </div>
          
          </Link>

  </div>);
}

export default IssueCard;