import React from 'react'
// import '../../src/Feda.css'
function Feda() {
  return (
    <div> 
      {/* <h2  style={{style=textAlign:"center"}}>Actual Feedback page </h2> */}
      <h2  style={{  "textAlign": "center" }}> Actual Feedback page </h2> 
     <hr/>
   
     <h4>Candidate</h4>
      
       <form class="form">

         <label For="text">Name:</label>
        <input type="Name" id="Name" placeholder="Sandeep Maurya" name="Name" />
        <label htmlFor="text">designation:</label>
        <input type="text" id="designation" placeholder="Full Stack" name="designation" />
         
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="sandeep.maurya.250@solace.co.in" name="email"/>


          <label htmlFor="Year">Year of experience</label>
          <input type="text" id="Year" placeholder="0.5 years" name="Year"/>


        
            </form>

          

           {/* <h2 style="text-Align:center ">Feedback Question </h2> */}
           <h2  style={{  "textAlign": "center" }}> FeedBack Question</h2> 
           {/* <h2 style="text-Align:center " >Feedback Question </h2> */}
           <hr style={{color: "red"}}/> 
         

          <br/>
          <br/>
        <br></br>
 
          <form>
            <br>
            </br>
          
              <label for="Question"> <strong>Que-1</strong> Hows about Puncltulity and collabration</label><br/><br/>
              <input type="text" id="Question" name="Question" placeholder="Answer this Que" /><br/><br/>
              <label for="Question">  <strong>Que-2</strong>  how About timing</label><br/><br/>
              <input type="text" id="Question" name="Question" placeholder="Answer this Que"/><br/><br/>
              <label for="Question">Question-3</label><br /><br />
              <input type="text" id="Question" name="Question" placeholder="Answer this Que"/><br/><br/>
              <br></br>
              <input type="submit" value="Save"/>
              <input type="submit" value="Cancel"/>


              </form> 

              </div>

  
  )
}

export default Feda
