import React, {useState,useEffect} from 'react';
import { Form, Link } from 'react-router-dom';
import logo from '../images/iFly_logo.png';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const LoginForm=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data={
            Username:username,
            Password:password
        }
        console.log("User details: "+data);
        axios.post('http://localhost:8080/api/users/login',data)
    .then(res=>{
      
      alert=("Login Successful!")
      navigate('/home')
    })
        
        
setUsername({
    ...Form,
    [event.target.name]: event.target.value
})

setPassword({
    ...Form,
    [event.target.password]:event.target.value})
    
    };

    
    return(
        
            <div className="container">
                <center><img src={logo} width={'320px'} height={'150px'} alt='iFly-logo' /></center>
            <br></br>
            
            <h1 align='center'><b>Welcome customer! Login or create account</b></h1>
                <h2>Login</h2>
                <form onSubmit={handleSubmit.bind(this)}>
                    <input type="text"
                        placeholder="Username"
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                    <input type="password" placeholder="Password" name='password' value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    <input type="submit" value="Login" onSubmit={handleSubmit.bind(this)}/>
                    <br></br>
                    New customer ? <Link to='/signup'><input type='button' value='Signup' /></Link>
                </form>
            </div>
    );
};

export default LoginForm;