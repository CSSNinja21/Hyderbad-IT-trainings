import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HrLogin = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const loginCheck =(e) =>{
        e.preventDefault()
        if (username === "jyoshna" && password ==="1234"){
          navigate("/hrdashboardqwerty")
        }
        else{
            alert ("Invalid name or password")
        }
    };
  return (
    <div className="container p-5 text-center">
      <h1>welcome to admin Page</h1>
      <div className="col-10 col-lg-6 mx-auto">
        <form onSubmit={loginCheck}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}

          ></input>
            <input
            type="text"
            name="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          ></input>
          <input type="submit" className="btn btn-danger form-control"/>
        </form>
      </div>
    </div>
  );
};

export default HrLogin;
