
import "./ProjectBoardC.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { default as ReactSelect } from "react-select";
import IssueCard from "../IssueCard/IssueCard";
import IIssue from "../../interfaces/IIssue"
import { isTemplateExpression } from "typescript";
import { valueTernary } from "react-select/dist/declarations/src/utils";


interface project
{
    
        projectID: string,
        projectName: string,
        projectStartDate: string,
        projectEndDate: string,
        projectOwner: {
            id: number,
            name: string,
            email: string,
            teamName: string,
            desination: string
        
    }
}
function ProjectBoardC(){

    let a:project[] = [];
    let b:IIssue[]=[];
    var temp:IIssue[]=[];
    let p:number[] =[]
    const [projects, setProjects] = useState(a);
    
    const [priority,setStatePriority] = useState(p);
    // const [priority2,setStatePriority2] = useState("");
    // const [priority3,setStatePriority3] = useState("");
    const [issues,setissues] = useState(b)
    const [assignees, setAssignees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [Assignee,setStateAssignee] = useState("");
    const [projectOwner,setStateProjectOwner] = useState("");
    const [ProjectName,setStateProjectName] = useState("")
    const [ProjectonlyName,setStateonlyProjectName] = useState("")
    const [assigneename,setStateAssigneename] = useState("");
     function getassigness(teamName:string){

        // console.log(teamName)
        axios({
          method: 'get',
          url: `https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user?teamName=${teamName}`
         
        }).then((response)=>{
        
        //   console.log(response)
          if (response)  {
            setAssignees(response.data);
            // console.log(response.data)
            setStateAssignee(response.data[0].id)
            setStateAssigneename(response.data[0].name)
            getissues();
            setLoading(true);
    
          }
          
        }).catch((e)=>{alert(e)
          setAssignees([])})
      }

    function getissues(){
      setLoading1(false);
      console.log(ProjectName);
      axios({
        method: 'get',
        url: `https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue?projectID=${ProjectName}`
       
      }).then((response)=>{
      
      //   console.log(response)
        if (response)  {
          
          // console.log(response.data)
          let x:number =0;
          temp =  [];
          setissues([]);
          for(x =0 ;x< response.data.length;x++)
          {
            console.log(response.data[x].assignee.name)
            console.log(assigneename)
            console.log(response.data[x].priority ,p)
            if(response.data[x].assignee.name===assigneename)
            {
              
              if (p.includes(response.data[x].priority))
              {
                temp.push(response.data[x])
               
              }
            }
          }
          
          console.log(temp);
          setissues(temp);
          console.log(issues)
          setLoading1(true);
        }
        
      }).catch((e)=>{alert(e)
        })
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
            
            //   console.log(response)
              if (response)  {
                setProjects(response.data);
                setStateProjectOwner(response.data[0].projectOwner.name)
                setStateonlyProjectName(response.data[0].projectName)
                // console.log(response.data);
                getassigness(response.data[0]["projectOwner"]["teamName"])
                setStateProjectName(response.data[0].projectID)
                // setStateAssigneename(response.data[0]["projectOwner"]["name"])
                console.log(assigneename)
                

                
                // setLoading(true);
    
              }
              
              
            }).catch((e)=>{alert(e)
            
            })
    
            
        }
        getProjects();
       
        
    
      }, []);


      function todo(o:any)
      {
        return o.status==1
      }

      function dev(o:any)
      {
        return o.status==2
      }

      function test(o:any)
      {
        return o.status==3
      }

      function com(o:any)
      {
        return o.status==4
      }

      if (!loading) {
        return (
          <Loading></Loading>
        );
      }
      else{
    
    return (<div>
   
   <div className='pb-flex1'>
       <h1>Project Details</h1>
       <button>VIEW INSIGHTS</button>
   </div>

                    <div>
                  <div className='issue-items'>
                    <label htmlFor="">Project Name</label>
                    
                    <select onChange={(event)=>{
                       setStateProjectOwner(projects[event.target.selectedIndex].projectOwner.name)
                       setStateProjectName(projects[event.target.selectedIndex].projectID)
                       setStateonlyProjectName(projects[event.target.selectedIndex].projectName)
                       console.log(projectOwner)
                       getissues();
                    }}>
                        {projects.map((value:any)=>{
                            return <option key={value.projectID} value={value.projectID}>{value.projectName} </option>
                        })}
                    </select>

                    </div>
                    <div className='issue-items'>
                    <label htmlFor="">Project Owner</label>
                    
                    <input value = {projectOwner} type="text" readOnly={true}/>

                    </div>
                    <div className='issue-items'>
                    <label htmlFor="">Filter Assignee</label>
                    <select value = {Assignee} onChange ={(event)=>{setStateAssignee(event.target.value)
                    setStateAssigneename(assignees[event.target.selectedIndex])
                    getissues();
                    }}>
                        {assignees.map((value:any)=>{
                            return <option key={value.id} value={value.id}>{value.name} </option>
                        })}
                    </select>

                    </div>
                    <div className='issue-items'>
                    <label htmlFor="">Filter Priority</label>
                    <ReactSelect className='React-select'
                     options={[
                        { value: 1, label: "LOW" },
                          { value:2, label: "MEDIUM" },
                          { value: 3, label: "HIGH" }]}
                          isMulti
                          closeMenuOnSelect={false}
                          hideSelectedOptions={false}
                    onChange = {(event)=>{
                        p=[]
                        let x:any;
                       for(x in event){
                       
                        
                        p.push(event[x].value)
                      }
                      setStatePriority(p)
                      getissues();

                      console.log(p)
                         }}
                   
                  
                     
                />
                </div>
                     </div>

                         <div className="grid-4">
                      <div className="pb-todo">
                      <h1>TO DO</h1>
                      {loading1?issues.filter(todo).map((value:any)=>{
                        return (<IssueCard id= {value.id} projectID={projectOwner} summary = {value.summary}  priority={value.priority} assigneename={value.assignee.name} createdOn = {value.createdOn} projectName = {ProjectonlyName}></IssueCard>)
                     }):<Loading></Loading>
                     }
                      </div>

                      <div className="pb-dev">
                        <h1>Development</h1>
                      {loading1?issues.filter(dev).map((value:any)=>{
                        return (<IssueCard id= {value.id} projectID={projectOwner} summary = {value.summary}  priority={value.priority} assigneename={value.assignee.name} createdOn = {value.createdOn} projectName = {ProjectonlyName}></IssueCard>)
                     }):<Loading></Loading>
                     }
                      </div>
                      <div className="pb-test">
                      <h1>TESTING</h1>
                      {loading1?issues.filter(test).map((value:any)=>{
                        return (<IssueCard id= {value.id} projectID={projectOwner} summary = {value.summary}  priority={value.priority} assigneename={value.assignee.name} createdOn = {value.createdOn} projectName = {ProjectonlyName}></IssueCard>)
                     }):<Loading></Loading>
                     }
                      </div>
                      <div className="pb-comp">
                      <h1>COMPLETED</h1>
                      {loading1?issues.filter(com).map((value:any)=>{
                        return (<IssueCard id= {value.id} projectID={projectOwner} summary = {value.summary}  priority={value.priority} assigneename={value.assignee.name} createdOn = {value.createdOn} projectName = {ProjectonlyName}></IssueCard>)
                     }):<Loading></Loading>
                     }
                      </div>
                      </div>
                         

                     </div>)

            
                    }               

};

export default ProjectBoardC;