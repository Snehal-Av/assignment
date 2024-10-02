import React, { useState } from "react";
// import "../Components/login.css";
import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

const SignUp = () => {
   
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    // const navigate= useNavigate()

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setUser({...user,[name]:value})
        console.log(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/auth/signup",user)
            .then((response) => {
             setUser(response.data)
             console.log(user)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div >
            <img className="bg-img" src="img/loginbg.jpeg" alt="bg" />

            <div className="login">
                <div className="login-logo ">
                    <img src='./img/Logo (1).png' alt="logo" />
                </div>
                <div className="heading ">
                    <h6>Online Project Management</h6>
                </div>
                <div className="loginbox mb-3 ">
                    <form onSubmit={handleSubmit} className="form  p-3  bg-body rounded">
                        <p>Login to get started</p>
                        <div class="mb-3 px-3 pt-2">
                            <label for="exampleInputEmail1" class="form-label">
                                Email
                            </label>
                            <input name="email" value={user.email} onChange={handleInput} type="email" className="form-control w-100" />
                        </div>
                        <div class="mb-3 px-3 pt-2">
                            <label for="exampleInputPassword1" class="form-label">
                                Password
                            </label>
                            <input name="password" value={user.password} onChange={handleInput} type="password" class="form-control" />
                        </div>

                        <div className="login-btn">
                            <button type="submit" className="btn btn-primary rounded-pill mt-3 p-2">
                                SignUp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
