import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";


const Header = () => {

  const { data } = useContext(AppContext)

  const bgUrl = data.images[0].image

  return (
    <div className="vh-100 container-fluid Header" style={{
      background: `url(${bgUrl}`, backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="row">
      <div className="Logo"></div>
        <div className="vh-100 overlay">
          <div className="title pb-3">
            <h1> {data.customerName} <br /> {data.title} </h1>
            <button className="btn btn-primary">
              scopri di più
        </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header
