// import  useHistory  from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom'


function Admin() {
    const history = useNavigate ()
    const [name, setName] = useState(); 
    const [Email, setEmail] = useState();
    // const history = useHistory();
    useEffect(()=>{
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/Feedback")}
    })
    
       
    // function Test() {

    //     history("/view")
    // }

            function saveUser() {
                history("/feedback")
                console.warn(name, Email);
                let data = { name, Email }
                fetch("localhost:8080/api/admin", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((result) => {
                    console.log("result", result);
                    
                }

                )
            }
            return (

                <div className=
                "wrapper login">
                    <div className="container">
                        <div className="col-left">
                            <div className="login-text">
                                <h2>Welcome to Peer review tool</h2>


                            </div>
                        </div>

                        <div className="col-right">
                            <div className="login-form">
                                <h2> Admin Login</h2>
                                <form action="">
                                    {/* <p>
                                        <label>Username <span>*</span></label>
                                        <input type="Name" value={name} onChange={(e) => { setName(e.target.value) }}
                                            placeholder="Username" required />
                                    </p> */}
                                    <p>
                                        <label>Username or Email<span>*</span></label>
                                        <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }}
                                            placeholder="Email or Username" required />
                                    </p>
                                    <p>
                                        <label>Password<span>*</span></label>
                                        <input type="password"
                                            placeholder="Password" required />
                                    </p>
                                    <p>
                                        <input type="submit"  onClick={saveUser} value="Sign In" />
                                        
                                        
                                    </p>



                                </form>
                            </div>
                        </div>

                    </div>
                </div>





            )
        }

        export default Admin
