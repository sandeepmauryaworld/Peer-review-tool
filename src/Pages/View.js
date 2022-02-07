import React from 'react'
import { useEffect,useState } from 'react'
// import axios from 'axios'

function View() {




  const [data, setData] = useState([])

  //  const url= "https://jsonplaceholder.typicode.com/comments"    // my api 
   const url= "localhost:8080/candidate/allCandidate"         // vaishnayi api
   useEffect (() => {
      fetch(url)
      .then(response => response.json()).then(json => {
        console.log("jsonnnn", json)
        setData(json)
      }).catch(e => {
          console.log("e", e)
      })
    }, [])

  return (
    data.map(item =>{
    <div>
      
    <h2 style={{color:"red"}} >Actual Feedback page</h2>
    <hr/>
 <form className="form"/>
        <h4>Candidate Section </h4>
      <label htmlFor="text">Name:</label>

{/* 
{
  data.map(item =>{

    return( 

      <div> {item.designation}  {item.name} {item.email} {item.cname} </div>
      
    )
   })
} */}



        <input type="Name" id="Name" placeholder="Sandeep Maurya" {...item.name} name="Name"/>
    <br></br>
        <label htmlFor="designation">designation</label>
        <input type="text" id="designation" placeholder="Full Stack" {...item.designation} name="designation"/>
        <label/>
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Sandeep.maurya.250@solace.co.in" {...item.email} name="email"/>
     <label htmlFor="Year">Year of experience</label>
            <input type="text" id="Year" placeholder="0.5 years"{...item.year} name="Year"/>
      <form/>
     <hr/>
     <h2 style={{textAlign :"center"}} >Assignee </h2>
     <hr/>
<form action="">
     <label htmlFor="Name">Name</label>
            <input type="text" id="Name" placeholder="sagar sir" name="email"/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="sagarsolace@.co.in" name="email"/>

        </form> <br/>
         <label htmlFor="Question"> <strong>Que-1 </strong>ask</label>
                <input type="text" id="Question" name="Question" placeholder="Answer this Que"/>
                <label htmlFor="Question"> <strong>Que-2</strong> ask</label>
                <input type="text" id="Question" name="Question" placeholder="Answer this Que"/><br/><br/>

 <label htmlFor="Name">Name</label>
                <input type="text" id="Name" placeholder="Nilesh sir" name="email"/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="nileshsolace@.co.in" name="email"/><br/><br/>
    
             <label htmlFor="Question"> <strong>Que-1 </strong>ask</label>
                <input type="text" id="Question" name="Question" placeholder="Answer this Que"/>
                <label htmlFor="Question"> <strong>Que-2</strong> ask</label>
                <input type="text" id="Question" name="Question" placeholder="Answer this Que"/><br/><br/>
            
 <hr/>
                <h2 style={{textAlign:"center" }} >Send summary to Candidate </h2>
                <hr/>
    
                <label htmlFor="Question"> <strong>Que-1 </strong> how about collabration</label> 
                <input type="text" id="Question" name="Question" placeholder="Genral summerized"/>
<br/><br/>
                <label htmlFor="Question"> <strong>Que-2 </strong> how about Dedication</label> 
                <input type="text" id="Question" name="Question" placeholder="Genral summerized"/>

<br/><br/>

                <button style={{backgroundColor: "blue", color: "cornsilk", marginleft: "13%"}} type="submit">Send Email to Candidate</button>

                </div>
  }))
}

export default View
