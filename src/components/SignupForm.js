import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const SignupForm=()=>{
    
    
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[password2,setPassword2]=useState('');
    const[name,setName]=useState('');
    const[dob,setDOB]=useState('');
    const[email,setEmail]=useState('');
    
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        // adding signup logic
        if (password!==password2){
            alert("Password and Confirm Password do not match!");
        }else{
            const data={
                Username:username,
                Password:password,
                Name: name,
                DOB: dob,
                Email:email
            }
            console.log("User details: "+data);
            axios.post('http://localhost:8080/api/users',data)
            .then(res=>{
            
            alert=("Signup Successful!")
            navigate('/home')
            })
        }
        //alert('Signup successful! Welcome to my site.');
    };

    /*const PostData= async (e)=>{
        e.preventDefault();

        const {username,pswd,emailaddress,dob,confirmPassword}= user;
        const res=await fetch("/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                username,pswd,emailaddress,dob,confirmPassword,name
            })
        })
        const data= await res.json();

        if(data.status===422 || data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");

            
        }
    }*/

    return(
        <div className="container_two">
            <h2 align='center'>Signup</h2>
            <form onSubmit={handleSubmit.bind(this)}>
                <input type="text" id="username" placeholder="Username"  onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" id="pswd" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" id="confirmPassword" placeholder="Confirm Password"  onChange={(e) => setPassword2(e.target.value)} required />
                <input type='text' id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} required /><br></br><br></br>
                <input type='text' id="emailaddress" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} required /><br></br><br></br>
                Date of Birth: <input type='date' id="dob" placeholder='Date of Birth' onChange={(e) => setDOB(e.target.value)} required /><br></br><br></br>

                <input type="submit" value="Signup" /><br></br>
                Recalled credentials?   <Link to='/login'><input type='button' value='Go back to Login page' /></Link>

                <center><input type='reset' value={'Reset form'}></input></center>

            </form>
        </div>
    );
};

export default SignupForm;
