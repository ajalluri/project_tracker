import { useNavigate } from 'react-router-dom';
import './CreateIssueC.css';
import Loading from '../Loading/Loading';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { default as ReactSelect } from "react-select";
interface ICreateIssue {
  
    summary: string,
    type: number,
    projectID: string,
    description:string,
    priority: number,
    status:number,
    assignee: string,
    tags: string[],
    sprint: number,
    storyPoint: string

}



function CreateIssueC() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [assignees, setAssignees] = useState([]);
  let defaulissue:ICreateIssue = {
    summary: "",
    type: 1,
    projectID: "",
    description:"",
    priority: 1,
    status:1,
    assignee: "",
    tags: [],
    sprint: 1,
    storyPoint: "1"
  }

  const [issue,setStateIssue] = useState(defaulissue);

  function createissueapi(){
    console.log(issue)
    if(issue.summary.length<5 || issue.description.length<5 || issue.storyPoint==="" )
    { 
      alert("Fill the Text fields properly")
      
     
    }

    else{
      axios({
        method: 'post',
        url: "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue",
        data: {
          "summary": issue.summary,
          "type": issue.type,
          "projectID": issue.projectID,
          "description": issue.description,
          "priority": issue.priority,
          "status":issue.status,
          "assignee": issue.assignee,
          "tags":issue.tags,
          "sprint": "Sprint "+issue.sprint.toString(),
          "storyPoint": parseInt(issue.storyPoint)
      },
  
        headers: {
          userid:1
        },
      }).then((response)=>{
        
        console.log(response)
        if(response.status===201)
        {
          alert("Issue Created Successfully")
          
          navigate('/projectboard');
        }
        
      }).catch((e)=>alert(e))
    }


  }

  function getassigness(teamName:string){

    console.log(teamName)
    axios({
      method: 'get',
      url: `https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user?teamName=${teamName}`
     
    }).then((response)=>{
    
      console.log(response)
      if (response)  {
        setAssignees(response.data);
        console.log(response.data)
        issue.assignee = response.data[0].id;
        setLoading(true);

      }
      
    }).catch((e)=>{alert(e)
      setAssignees([])})
  }

  useEffect(() => {
    function getProjects() {
      
        axios({
          method: 'get',
          url: "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project",
         
    
          headers: {
            userid:1
          },
        }).then((response)=>{
        
          console.log(response)
          if (response)  {
            setProjects(response.data);
            console.log(response.data);
            getassigness(response.data[0]["projectOwner"]["teamName"])
            issue.projectID= response.data[0].projectID;
            
            // setLoading(true);

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

  return(
  <div> <h1 className='issue-header'>Create User Stories/ Tasks/ Bugs</h1>
  
  <div className='issuec-grid'>

               
                   

                    <div className=' issue-items1'>
                    <label htmlFor="">Summary</label>
                    <input onChange={(event)=>
                    {
                      issue.summary = event.target.value;
                      setStateIssue({...issue})
                    }} type="text" />
                    </div>

                    <div className='issue-items'>
                    <label htmlFor="">Type</label>
                    <select value ={issue.type} onChange={(event)=>setStateIssue((p)=>{p.type = event.target.selectedIndex+1;
                    return {
                      ...p
                  };})}>
                        <option value ={1}>BUG</option>
                        <option value ={2}>TASK</option>
                        <option value ={3}>STORY</option>
                    </select>
                    </div>

                    <div className='issue-items'>
                    <label htmlFor="">Project</label>
                    
                    <select onChange={(event)=>{
                      
                      getassigness(projects[event.target.selectedIndex]["projectOwner"]["teamName"])
                      issue.projectID = event.target.value;
                      setStateIssue({...issue})
                      ;

                    } 
                   
                    }>
                        {projects.map((value:any)=>{
                            return <option key={value.projectID} value={value.projectID}>{value.projectName} </option>
                        })}
                    </select>

                    </div>

                    <div className='  issue-items4'>
                    <label htmlFor="">Description</label>
                    <input type="text" onChange={(event)=>
                    {
                      issue.description = event.target.value;
                      setStateIssue({...issue})
                    }}/>
                    </div>


                    <div className='issue-items'>
                    <label htmlFor="">Priority</label>
                    <select value ={issue.priority} onChange={(event)=>setStateIssue((p)=>{p.priority = event.target.selectedIndex+1
                    return {
                      ...p
                  }})}>
                        <option value ={1}>LOW</option>
                        <option value ={2}>MEDIUM</option>
                        <option value ={3}>HIGH</option>
                    </select>
                    </div>



                    <div className='issue-items'>
                    <label htmlFor="">Assignee</label>
                    <select  onChange ={(event)=>{
                      issue.assignee = event.target.value
                      setStateIssue({...issue})
                    }} >
                        {assignees.map((value:any)=>{
                            return <option key={value.id} value={value.id}>{value.name} </option>
                        })}
                    </select>
                    </div>


                    <div className='issue-items'>
                    {/* <label htmlFor="">Tags</label>
                    <select>
                        <option value ={1}>HU-22</option>
                        <option value ={2}>Angular track</option>
                        
                    </select> */}
                    <label htmlFor="">Tags</label>
                    <ReactSelect className='React-select'
                    
                  options={[
                    { value: "HU-22", label: "HU-22" },
                      { value: "Angular track", label: "Angular track" }]}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange ={(event)=>{
                    issue.tags = []
                    let x:any;
                    for(x in event){
                     
                      console.log(event[x].label)
                      issue.tags.push(event[x].label)
                    }

                    setStateIssue({...issue})
                    console.log(event)
                  
                  }}

                  
                 
                  
        />
                    </div>


                    <div className='issue-items'>
                    <label htmlFor="">Sprint</label>
                    <select value ={issue.sprint} onChange={(event)=>
                    {console.log(event.target.value)
                      
                      setStateIssue((p)=>{
                    p.sprint =parseInt(event.target.value);
                    return {
                    ...p
                } ;})
                    console.log(issue)}}>
                        <option value ={1}>Sprint 1</option>
                        <option value ={2}>Sprint 2</option>
                        <option value ={3}>Sprint 3</option>
                    </select>
                    </div>

                    <div className='issue-items'>
                    <label htmlFor="">Story Points</label>
                    <input value = {issue.storyPoint} type="number" min={1} placeholder='0,1,2...' onChange={(event)=>setStateIssue(()=>
                      {
                        
                        issue.storyPoint=event.target.value;
                        return {...issue}

                      })}/>
                    </div>

                    
            </div>
            <div className='buttons'>
            <button >Reset</button>
            <button className='create' onClick ={()=>createissueapi()}>Create</button>
            </div>
  </div>);
}
}

export default CreateIssueC;