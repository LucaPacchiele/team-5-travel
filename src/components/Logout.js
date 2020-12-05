
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useContext, useEffect, useState } from 'react'
import { authContext } from "../context/ProvideAuth";



const Logout = () => {
  let auth = useContext(authContext);


  return (

    <div className="Logout d-flex s-between">

      <h4>Benvenuto {auth.user}</h4><div>
        <Link to="/login" onClick={() => { auth.signout() }}><h4>logout</h4></Link></div>


      {/* <form onSubmit={(e) => submitForm(e)} noValidate>

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

      </form> */}


    </div >

  )
};

export default Logout;
