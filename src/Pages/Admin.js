import { useEffect,useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'



// useEffect(() => {
//     if(state === null || state === undefined){
//       navigate("/feedback");

const Admin =()=>{



    // const navigate= useNavigate ()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate= useNavigate ()
    



    const handleUserName= (e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword =(e)=>{

        setPassword(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("submitted form")
        axios.post('localhost:8080/api/login' , {
            email:email,
            password:password
        })
        .then((response)=>{
            console.log(response.data );
             
        })
        .catch((err )=> {
            console.log(err)
            console.log(err.response)

        })
        navigate("feedback/")
    }
  
return (
   
    <div className= "wrapper login">
                        <div className="container">
                            <div className="col-left">
                                <div className="login-text">
                                
                                    <h2>Welcome to Peer review tool</h2>
                                    <form onSubmit={handleSubmit}/>
                                   
                                </div>
                            </div>
      <div className="col-right">
                                <div className="login-form">
                                    <h2> Admin Login</h2>
                                    
                                      <form onSubmit={handleSubmit}>
             <label>Email</label>
             <input type="text" value={email} onChange={handleUserName}
             required placeholder='Enter Email' name='email'/> <br />
             <label>Password</label>
             <input type="password" value={password} onChange={handlePassword} required name= 'password' placeholder="password" /> <br/>
             <input type="submit" value="Submit" />
        </form> 
                                      
                                </div>
                            </div>
    
                        </div>
                    </div>
    
)
    }

        export default Admin