// // import  useHistory  from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import {useNavigate } from 'react-router-dom'


// function Admin() {
//     const history = useNavigate ()
//     const [name, setName] = useState(); 
//     const [Email, setEmail] = useState();
//     // const history = useHistory();
//     useEffect(()=>{
//     //     if (localStorage.getItem('user-info')) {
//     //         history.push("/Feedback")}
//     })
    
       
//     // function Test() {

//     //     history("/view")
//     // }

//             function saveUser() {
//                 history("/feedback")
//                 console.warn(name, Email);
//                 let data = { name, Email }
//                 fetch("localhost:8080/api/admin", {
//                     method: 'POST',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-type': 'application/json'
//                     },
//                     body: JSON.stringify(data)
//                 }).then((result) => {
//                     console.log("result", result);
                    
//                 }

//                 )
//             }
//             return (

//                 <div className=
//                 "wrapper login">
//                     <div className="container">
//                         <div className="col-left">
//                             <div className="login-text">
//                                 <h2>Welcome to Peer review tool</h2>


//                             </div>
//                         </div>

//                         <div className="col-right">
//                             <div className="login-form">
//                                 <h2> Admin Login</h2>
//                                 <form action="">
//                                     {/* <p>
//                                         <label>Username <span>*</span></label>
//                                         <input type="Name" value={name} onChange={(e) => { setName(e.target.value) }}
//                                             placeholder="Username" required />
//                                     </p> */}
//                                     <p>
//                                         <label>Username or Email<span>*</span></label>
//                                         <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }}
//                                             placeholder="Email or Username" required />
//                                     </p>
//                                     <p>
//                                         <label>Password<span>*</span></label>
//                                         <input type="password"
//                                             placeholder="Password" required />
//                                     </p>
//                                     <p>
//                                         <input type="submit"  onClick={saveUser} value="Sign In" />
//                                         {/* <button>sda</button> */}
                                        
                                        
//                                     </p>



//                                 </form>
//                             </div>
//                         </div>

//                     </div>
//                 </div>





//             )
//         }

//         export default Admin

// import  {useNavigate}  from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import {useNavigate } from 'react-router-dom'


// function Admin() {

    
//     const navigate= useNavigate ()
//     const [email, setEmail] = useState(""); 
//     const [password, setpassword] = useState("");


//     // const history = useHistory();
//     useEffect(()=>{
//         if (localStorage.getItem('user-info')) {
//             navigate('/Feedback')}
//     },[])
    
       
    

//            async function Admin() {
//                 navigate("/feedback")
//                 console.warn("data" ,email,password);
//                 let item  = { email,password }
//                 let result=await fetch("localhost:8080/api/admin",{
            
//                     method: 'POST',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-type': 'application/json'
//                     },
//                     body: JSON.stringify(item)
//                 });
//                 result= await result.json();
//                 localStorage.setItem('user-info',JSON.stringify(result))
//                     navigate('/feedback')
                    
//             }
//             return (

//                 <div className="col-sm-6 offset-sm-3">
//                     <h1>Peer review Tool</h1>
//                <input type="text" className='form-control' placeholder='email'
//                onClick={(e)=>setEmail(e.target.value)}/>
//                <br/><br/>

//                <input type="password" className='form-control' placeholder='password'
//                onClick={(e)=>setpassword(e.target.value)}/>
// <br/><br/>
// <button onClick={Admin} className='btn btn-primary'>Login</button>

//                             </div>
//             // </div>

            


                     
//             )
//         }

//         export default Admin





import { useState } from 'react'
import axios from 'axios'

const Admin =()=>{


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


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
        axios.post('localhost:8080/api/admin' , {
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

    }



return (
    <div>
        <h1>Login Form Details !!!!!</h1>
        <form onSubmit={handleSubmit}>
             <label>Email</label>
             <input type="text" value={email} onChange={handleUserName}
             required placeholder='Enter Email' name='email'/> <br />
             <label>Password</label>
             <input type="password" value={password} onChange={handlePassword} required name= 'password' placeholder="password" /> <br/>
             <input type="submit" value="Login" />
        </form>
    </div>
             )
             }
        export default Admin