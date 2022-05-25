import React from 'react';
import './IssueDetailsC';
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../redux/store"
import IIssue from '../../interfaces/IIssue';
import Loading from '../Loading/Loading';
import "./IssueDetailsC.css"
function IssueDetailsC() {
    const params = useParams();

    
    let [issuestatus , setissuestatus] = useState("");

    let [issuetype,setIssueType]  = useState('');

    let issuepriority:string = ""

  


    function conversion()
    {
      if(issue.status ==1){
        setissuestatus("TO DO")
      }
      if(issue.status ==2){
        setissuestatus("DEVELOPMENT")
    }
    if(issue.status ==3){
      setissuestatus("TESTING")
  }
  if(issue.status ==4){
    setissuestatus("COMPLETED")

   if(issue.type == 1){
     setIssueType('BUG')
   }
   if(issue.type == 2){
    setIssueType('TASK')
  }
  if(issue.type == 3){
    setIssueType('Story')
  }


}
console.log(issuestatus);
console.log(issuetype)
    }
    let a:IIssue= {
      id: "",
      summary:"",
      type: 1,
      projectID: "",
      description: "",
      priority: 1,
      assignee: {
          id: 1,
      name: "",
          email: "",
          teamName: "",
          desination: ""
      },
      tags:[],
      sprint: "",
      storyPoint: null,
      status: 1,
      createdBy: {
          id: 1,
          name: "",
          email: "",
          teamName: "",
          desination: ""
      },
      createdOn:"",
      updatedBy: {
          id: 1,
          name: "",
          email:"",
          teamName:"" ,
          desination: ""
      },
      updatedOn: ""
  };
    let userid:string = useSelector((state: RootState) => state.login.userid)

    const [issue,setissue] = useState(a)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        function getProjects() {
          
            axios({
              method: 'get',
              url: `https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue/${params.id1}`,
                
              headers: {
                userid: userid 
              },
             
            }).then((response)=>{
            
            //   console.log(response)
              if (response)  {
               console.log(response)
               setissue(response.data)
                
                
              
                
                setLoading(true);
                conversion();
    
              }
              
              
            }).catch((e)=>{alert(e)
            
            })
    
            
        }
        getProjects();
       
        
    
      }, []);


      if (!loading) {
        return (
          <Loading></Loading>
        );
      }
      else{
    
  return <div className='margin'>

    <p className='issue-details-heading'>
      <span >Project Details /</span>  Issue Deatils
    </p>

    <div className='project-name-summ'>
      <h1>{params.id2}</h1>
      <p>{issue.summary}</p>

    </div>
  

  
  {/* <div>{issue.id}</div> */}

  <div className='issueDetails-grid'>
  <div className='desc'>
    <p>Description:</p>
    <h6>{issue.description}</h6>
    <hr />

    <div className='details'>
    <h4>Details</h4>
     <div className='details-grid'>
       <div>
         {issuetype}
       </div>
       <div>ada</div>

     </div>

  </div>
  </div>
  
  
  {/* <div>{issuestatus}</div> */}
  <div>h</div>

  </div>


  
  </div>;
}
}

export default IssueDetailsC;