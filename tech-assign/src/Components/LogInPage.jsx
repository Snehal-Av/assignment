import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
    FormControl,
    InputGroup
} from "react-bootstrap";
import axios from "axios";

const LogInPage = () => {
    const [showpassword, setShowpassword] = useState(true)
    const [err,setErr]=useState(false)
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate();

    const validateMail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(email)
      }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserLogin({ ...userLogin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios
            .post("http://localhost:5000/auth/login", userLogin)
            .then((res) => {
                setUserLogin(res.data);
                console.log(res)
                
                console.log(res.msg)
                console.log(userLogin);

                navigate("/dashboard");
            })
            .catch((error) => {
                setErr(error.message);
            });
    };

    return (
        <div>
            <img className="bg-img" src="img/loginbg.jpeg" alt="bg" />

            <div >
                <div className="login-head">
                    <div className="login-logo ">
                        <img src="./img/Logo (1).png" alt="logo" />
                    </div>
                    <div className="heading ">
                        <h6>Online Project Management</h6>
                    </div>
                </div>
                <div className="loginbox mb-3 ">
                    <form onSubmit={handleSubmit} className="form  p-3 ">
                        <p>Login to get started</p>
                        <div className="mb-3 px-3 pt-2">
                            <label className={err && userLogin.email.length === 0 ? 'text-danger':""}>
                                Email
                            </label>
                            <input className={err && userLogin.email.length === 0 ? 'border border-danger':""}
                                name="email"
                                value={userLogin.email}
                                onChange={handleInput}
                                type="email"
                            />
                            {err && userLogin.email.length === 0 && (
                            <div className="email-val">Email is required</div>
                        )}
                        </div>
                        
                        <div className=" mb-2 px-4 pt-2">
                            <label className={err && userLogin.email.length === 0 ? 'text-danger':""}>
                                Password
                            </label>
                            <div className="d-flex">
                                <FormControl                               
                                    name="password"
                                    value={userLogin.password}
                                    onChange={handleInput}
                                    className={err && userLogin.email.length === 0 ? 'border border-danger':""}
                                    type={showpassword ? "password" : "text"}
                                />
                                <InputGroup.Text className="eye"
                                    onClick={() => setShowpassword(!showpassword)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {showpassword ? <Visibility /> : <VisibilityOff />}
                                </InputGroup.Text>
                            </div>
                            {err && userLogin.password.length === 0 && (
                            <div className="email-val">Password is required</div>
                        )}
                        </div>
                       

                        <div className="login-btn px-4 mx-5 mt-2 pt-4">
                            <button
                                type="submit"
                                className="btn btn-primary rounded-pill p-3 mx-5" >
                                LogIn
                            </button>
                        </div>
                        
                    </form>
                   
                </div>
                <p style={{padding:'5px',fontSize:'15px',marginLeft:'570px',marginTop:'190px',color:'red'}}>{err ? "Invalid Credidential":""}</p>
            </div>
        </div>
    );
};

export default LogInPage;
