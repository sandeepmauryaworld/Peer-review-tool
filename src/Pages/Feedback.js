import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom'
// import React, {useEffect, useState} from 'react'

function Feedback() {
  const history = useNavigate ()
  const [name, setName]= useState();
  const [year, setYear]= useState();
  const [designation, setdesignation]= useState();
  const [puncual, setpuncual]= useState();
  const [productive, setproductive]= useState();
  const [dedication, setdedication]= useState();
  const [collab, setcollab]= useState();
  const [feedback, setfeedback]= useState();
  


  function saveUser()
  {
    history("/listing")
console.warn(name,year,designation,puncual,productive,dedication,collab,feedback);
let data={name,year,designation,puncual,productive,dedication,collab,feedback}
fetch("localhost:4000/feedbackapi/feedbacks",{
   method:'POST',
   headers:{
       'Accept':'application/json',
       'Content-type':'application/json'
   },
   body:JSON.stringify(data)
  }).then((result)=>{
      console.log("result",result);
  }

  )
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
<input type="text" id="fname"  name="firstname" value={name} onChange={ (e)=>{setName(e.target.value)}} placeholder="Your name.."/>    
</div>    
</div>    
<div className="row">    
<div className="col-25">    
<label htmlFor="year">year</label>    
</div>    
<div className="col-75">    
<input type="text" id="year" name="year"  value={year} onChange={ (e)=>{setYear(e.target.value)}} placeholder="year."/>    
</div>    
</div>    


<div className="row">    
<div className="col-25">    
<label htmlFor='designation'>designation</label>    
</div>    
<div className="col-75">    
<input type="text" id="designation" name="designation" value={designation} onChange={ (e)=>{setdesignation(e.target.value)}} placeholder="designation"/>    
</div>    
</div> 


<div className="row">    
<div className="col-25">    
<label htmlFor="puncual">puncual</label>    
</div>    
<div className="col-75">    
<input type="text" id="puncual" name="puncual" value={puncual} onChange={ (e)=>{setpuncual(e.target.value)}} placeholder="puncual"/>    
</div>    
</div> 



<div className="row">    
<div className="col-25">    
<label htmlFor="productive">productive</label>    
</div>    
<div className="col-75">    
<input type="text" id="productive" name="productive" value={productive} onChange={ (e)=>{setproductive(e.target.value)}} placeholder="productive"/>    
</div>    
</div>



<div className="row">    
<div className="col-25">    
<label htmlFor="dedication">dedication</label>    
</div>    
<div className="col-75">    
<input type="text" id="dedication" name="dedication" value={dedication} onChange={ (e)=>{setdedication(e.target.value)}} placeholder="dedication"/>    
</div>    
</div>



<div className="row">    
<div className="col-25">    
<label htmlFor="collab">collabration</label>    
</div>    
<div className="col-75">    
<input type="text" id="collab" name="collab" value={collab} onChange={ (e)=>{setcollab(e.target.value)}} placeholder="collab"/>    
</div>    
</div>




<div className="row">    


</div>    
<div className="row">    
<div className="col-25">    
<label htmlFor="feed_back">FeedBack</label>    
</div>    
<div className="col-75">    
<textarea id="subject" name="subject" value={feedback} onChange={ (e)=>{setfeedback(e.target.value)}} placeholder="Write something.." ></textarea>    
</div>    
</div>    
<div className="row">   
<input type="submit" onClick={saveUser} value="Submit"/>    

</div> 
 
</form>    
</div>
    
</div>
        



)
}


    
 

export default Feedback
