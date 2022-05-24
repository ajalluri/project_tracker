
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SideNavBar from ".."
import "./CreateProjectC.css"
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
function CreateProject(){

  const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [startdate,setStartDate] = useState("");
    const [enddate,setEndDate] = useState("");

    const[projectName,setProjectName] = useState("");

    const[projectowner,setProjectOwner] = useState("Select");


    function start(e:any){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var todaydate:string = mm + '/' + dd + '/' + yyyy;

        var date1 = new Date(e.target.value);
        var date2 = new Date(todaydate);
  
        // To calculate the time difference of two dates
        var Difference_In_Time =  date1.getTime()-date2.getTime();

        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        console.log(Difference_In_Days);

        console.log(Difference_In_Time);

        if (Difference_In_Days<0)
        {
            setStartDate("")
            alert("Enter a Valid Start Date")
        }

        else{
            setStartDate(e.target.value)
        }

    }


    function createprojectapi() {
      
      if(projectName.length<6 || startdate==="" || enddate==="" )
      {
        alert("Fill the form fields properly")
      }
      else{
        console.log("api call will be done")
      }
      axios({
        method: 'post',
        url: "https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project",
        data: {
          "projectName":projectName,
          "projectOwner": parseInt(projectowner),
          "projectStartDate":"2022-02-14T12:00:00Z",
           "projectEndDate":"2022-02-15T12:00:00Z"
      },
  
        headers: {
          userid:1
        },
      }).then((response)=>{
        
        console.log(response)
        if(response.status===201)
        {
          alert("Project Created Successfully")
          
          navigate('/projectboard');
        }
        
      }).catch((e)=>alert(e.response.data.error.detail))
      
        

      
        
        
      
      
    }
    function end(e:any){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var todaydate:string = mm + '/' + dd + '/' + yyyy;

        if(startdate==="")
        {
            alert("Enter Start Date")
            setEndDate("")
        }
        else{
            var date1 = new Date(startdate);
        

        var date2 = new Date(e.target.value);
  
        // To calculate the time difference of two dates
        var Difference_In_Time =  date2.getTime() -date1.getTime();

        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        


        console.log(Difference_In_Days);

        
        console.log(startdate)
        

       
            if (Difference_In_Days <0 )
            {
                setEndDate("")
                alert("Enter a Valid End Date")
            }
    
            else{
                setEndDate(e.target.value)
            }
    
        
        }
        
       
    }

    useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get(
              'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user'
            );
    
            if (!response) {
              setLoading(false);
            } else {
              setData(response.data);
              console.log(response.data)
              console.log(typeof(data))
              setProjectOwner(response.data[0].id)
              setLoading(true);
            }
          } catch (e) {
            console.log(e);
          }
        }
        getData();
      }, []);

      if (!loading) {
        return (
          <Loading></Loading>
        );
      }
      else{
        return (<div>
            <h1 className='create-project'>Create Project</h1>

            <div className='create-project-grid'>

                <div className='items'>
                    <label htmlFor="">Project Name</label>
                    <input type ="text" value = {projectName} onChange={(e)=>setProjectName(e.target.value)} placeholder='Project Name'/> 

                </div>
                
                <div className='items'>
                    <label htmlFor="">Owner</label>
                    <select   value={projectowner} onChange={(e)=>{setProjectOwner(e.target.value)}}>
                        {data.map((value:any)=>{
                            return <option key={value.id} value={value.id}>{value.name} </option>
                        })}
                    </select>

                </div>
                <div className='items'>
                    <label htmlFor="">Project Start Date</label>
                    <input type="date" value ={startdate} onChange={(e)=>{start(e)}}/>

                </div>
                <div className='items'>
                    <label htmlFor="">Project End Date</label>
                    <input type="date" value ={enddate} onChange={(e)=>{end(e)} }/>

                </div>

            </div>
              
              <div className='buttons'>
            <button onClick={()=>{
              setStartDate("");
              setEndDate("");
              setProjectName("");
              setProjectOwner("1");
              console.log(projectowner)
             
            }}>Reset</button>
            <button className='create' onClick={()=>createprojectapi()}>Create</button>
            </div>

         </div>)
      }
    
};

export default CreateProject;