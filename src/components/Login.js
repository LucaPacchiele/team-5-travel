
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useContext, useEffect, useState } from 'react'
import { authContext } from "../context/ProvideAuth";
import { useHistory } from "react-router-dom";




const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let auth = useContext(authContext);
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault()
    console.log("username: ", username)
    console.log("password: ", password)

    if(username==="asd" && password==="123" ){
      auth.signin(username);
      history.push("/main");
    }

  }


  useEffect(() => {
    console.log("LOGIN: ", auth)
  }, [])

  return (

    <div className="Login">


      <form onSubmit={(e) => submitForm(e)} noValidate>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">USER</span>
          </div>
          <input type="text" className="form-control" placeholder="Username"
            name="username" value={username} onChange={e => { setUsername(e.target.value) }}></input>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">PW</span>
          </div>
          <input type="password" className="form-control" placeholder="Password"
            name="password" value={password} onChange={e => { setPassword(e.target.value) }}></input>
        </div>

        
          <button type="submit" name="confirm">ACCEDI!</button>
   

      </form>


    </div >

  )
};

export default Login;
