import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Feed = () => {


  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [exp, setExp] = useState('');



  const handleName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleDesignation = (e) => {
    console.log(e.target.value)
    setDesignation(e.target.value)
  }
  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handleExp = (e) => {
    console.log(e.target.value)
    setExp(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted form")
    axios.post('localhost:8080/api/login', {
      name: name,
      designation: designation,
      email: email,
      exp: exp

    })
      .then((response) => {
        console.log(response.data);

      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)

      })
    // navigate("view/")
  }

  return (


    <div>
      <div className="position-absolute top-0 end-0">
        {/* <form onSubmit={handleSubmit} /> */}
        <button type="button" class="btn btn-danger  ">Back</button>
      </div>
      <h1 style={{ marginLeft: "40%" }}>Candidate Section</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="row p-4 " >
        <form onSubmit={handleSubmit}> 
          <div className="col-4 m-2">
            
          <form onSubmit={handleSubmit}/> 

            <label htmlFor="text">Fullname:</label>
            <input type="name" className="form-control" value={name} onChange={handleName} placeholder="Fullname" />
          </div>
          <div className="col-2 m-2">
            <label htmlFor="text">Designation:</label>
            <input type="text" className="form-control" value={designation} onChange={handleDesignation} placeholder="Designation" />


            <div className="col-10 " >
              <label htmlFor="text">Email</label>
              <input type="email" className="form-control" value={email} onChange={handleEmail} placeholder="Email" />
            </div>
          </div>
           <div className="row mt-2">
            <div className="col-4" >
              <label htmlFor="text">Year of experience</label>
              <input type="text" className="form-control" value={exp} onChange={handleExp} placeholder="Year of experience" />
              
            </div>
            

          </div>
          </form>
        </div>
        </form>






      <hr />
      <h3 className="mt-3 text-center font-italic" > <u>Assignee</u></h3>
      <hr />

      <div className="row p-4 ">
        <div className="col-4 ">
          <label htmlFor="text">Assignee Name</label>
          <input type="name" className="form-control" placeholder="Sagar s" />

          <label htmlFor="text">Question</label>
        </div>
        <div className="col-4">
          <label htmlFor="text">Email</label>
          <input type="email" className="form-control" placeholder="sagarsolace@gmail.com" />
        </div>
      </div>



      <label className="mt-3 p-1" >Question-1 here</label>
      <div className="row p-4 ">
        <div className="col-4 ">
          <label htmlFor="text">Assignee Name</label>
          <input type="name" className="form-control" placeholder="Nilesh K" />

          <label htmlFor="text">Question</label>
        </div>
        <div className="col-4">
          <label htmlFor="text">Email</label>
          <input type="email" className="form-control" placeholder="Nileshsolace@gmail.com" />
        </div>
      </div>





      <label className="mt-3 p-1" >Question-2 here</label>
      <div className="col-4 p-4">
        <input type="name" className="form-control" placeholder="Answer-2 Here" />
      </div>
      <label className="mt-3 p-1" >Question-2 here</label>
      <div className="col-4">
        <input type="name" className="form-control" placeholder="Answer-2 Here" />
      </div>





      <hr />
      <h3 className="mt-3 text-center font-italic" > <u>Send summary</u></h3>
      <hr />



      <div className='p-4'>
        <label className="mt-3 p-1" >Question-1 here</label>
        <textarea cols="1" rows="2" wrap="hard" placeholder="Genral sunmmary"></textarea>



        <label className="mt-3 p-1" >Question-2 here</label>

        <textarea cols="1" rows="2" wrap="hard" placeholder="Genral sunmmary"></textarea>
      </div>



      <div className="mt-3">
        {/* <button  type="button" className="btn btn-success">Send to Email</button> */}
        {/* <button  type="submit" className="btn btn-success" value="submit"></button> */}
        <input type="submit" value="Submit" />
      </div>


    </div>


  )
}

export default Feed