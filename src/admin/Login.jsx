import React, { useState, useEffect,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { auth, app } from "../firebase/firebase-config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NavBar from '../NavBar'
import "../style/login.css"



export default function login() {


    let navigate = useNavigate();

 

  
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [error, setError] = useState(false)




    const onLogin = (e) => {
      
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                localStorage.setItem("isAuth", true);
           
                const user = userCredential.user;
                console.log(user)
          
          
            
                window.location.pathname = "/image";
                // navigate("/dashboard");
                setEmail("")
                setPassWord("")
                // ...
            })
            .catch((error) => {
                // setIsAuth(false)

                setError(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
   

    }

    return (
       <div >
       
       <NavBar/>
       <Form className='login-admin' onSubmit={onLogin}>
       {error?<h3 className='text-black' >Email or Password are wrong</h3>:null}
           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label className='text-black'>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
           
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label className='text-black'>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassWord(e.target.value)} />
           </Form.Group>

           <Button variant="primary" type="submit">
               Submit
           </Button>
       </Form>
     
       </div>
    )
}
