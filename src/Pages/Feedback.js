import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate } from 'react-router-dom'   //for navigation


const Feedback =()=>{
  const navigate= useNavigate ()// for navigation 

  const [name, setName]= useState('');
  const [year, setYear]= useState('');
  const [designation, setDesignation]= useState('');
  const [puncual, setPuncual]= useState('');
  const [productive, setProductive]= useState('');
  const [dedication, setDedication]= useState('');
  const [collab, setCollab]= useState('');
  const [feedback, setFeedback]= useState('');
  
  const handleUserName= (e)=>{
    console.log(e.target.value)
    setName(e.target.value)
}

const handleYear= (e)=>{
  console.log(e.target.value)
  setYear(e.target.value)
}

const handleDesignation= (e)=>{
  console.log(e.target.value)
  setDesignation(e.target.value)
}

const handlePuncual= (e)=>{
  console.log(e.target.value)
  setPuncual(e.target.value)
}

const handleProductive= (e)=>{
  console.log(e.target.value)
  setProductive(e.target.value)
}

const handleDedicaion= (e)=>{
  console.log(e.target.value)
  setDedication(e.target.value)
}

const handleCollab= (e)=>{
  console.log(e.target.value)
  setCollab(e.target.value)
}

const handleFeedback= (e)=>{
  console.log(e.target.value)
  setFeedback(e.target.value)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log("submitted form")
  axios.post('localhost:8080/api/feedback ' , {
      name:name,
      year:year,
      dedication:dedication,
      designation:designation,
      puncual:puncual,
      collab:collab,
      productive:productive,
      feedback:feedback
  })
  .then((response)=>{
      console.log(response.data );
       
  })
  .catch((err )=> {
      console.log(err)
      console.log(err.response)

  })

  navigate("listing/")

}


  return (

    <div>
    <h2  style={{  "textAlign": "left" }}> FEEDBACK FORM</h2> 
       

<div className="container">    
<form>    
<div className="row">    
<div className="col-25">    
<label htmlFor="fname">FirstName</label>    
</div>    
<div className="col-75">    
<input type="text" id="fname"  name="firstname" value={name} onChange={handleUserName} placeholder="Your name.."/>    
</div>    
</div>    
<div className="row">    
<div className="col-25">    
<label htmlFor="year">year</label>    
</div>    
<div className="col-75">    
<input type="text" id="year" name="year"  value={year} onChange={handleYear} placeholder="year."/>    
</div>    
</div>    

<div className="row">    
<div className="col-25">    
<label htmlFor='designation'>designation</label>    
</div>    
<div className="col-75">    
<input type="text" id="designation" name="designation" value={designation} onChange={handleDesignation} placeholder="designation"/>    
</div>    
</div> 

<div className="row">    
<div className="col-25">    
<label htmlFor="puncual">puncual</label>    
</div>    
<div className="col-75">    
<input type="text" id="puncual" name="puncual" value={puncual}  onChange={handlePuncual} placeholder="puncual"/>    
</div>    
</div> 

<div className="row">    
<div className="col-25">    
<label htmlFor="productive">productive</label>    
</div>    
<div className="col-75">    
<input type="text" id="productive" name="productive" value={productive} onChange={handleProductive} placeholder="productive"/>    
</div>    
</div>

<div className="row">    
<div className="col-25">    
<label htmlFor="dedication">dedication</label>    
</div>    
<div className="col-75">    
<input type="text" id="dedication" name="dedication" value={dedication} onChange={handleDedicaion} placeholder="dedication"/>    
</div>    
</div>


<div className="row">    
<div className="col-25">    
<label htmlFor="collab">collabration</label>    
</div>    
<div className="col-75">    
<input type="text" id="collab" name="collab" value={collab} onChange={handleCollab} placeholder="collab"/>    
</div>    
</div>


<div className="row">    

</div>    
<div className="row">    
<div className="col-25">    
<label htmlFor="feed_back">FeedBack</label>    
</div>    
<div className="col-75">    
<textarea id="subject" name="subject" value={feedback} onChange={handleFeedback} placeholder="Write something.." ></textarea>    
</div>    
</div>    
<div className="row">   

{/* <input type="submit" value="Submit" /> */}
<input type="submit" value="Submit" />

</div> 
 
</form>    
</div>
    
</div>

)
}

export default Feedback
