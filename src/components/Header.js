import React, { useContext, useEffect } from "react";

import { AppContext } from "../context/AppContext";

const styleHeader = {
  height: "100vh",
  backgroundImage:
    'url("http://51.77.82.133:86/api/images/155/images/uY6tWHRMoOvOjWfg.jpeg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  textTransform : "uppercase",  
  color: "#fff",
};

const Header = () => {
  const { callApi,allData } = useContext(AppContext);
  const {customerName, title} = allData;

  return (
    <div style={styleHeader}>
      <div className="logoHeader">
        {/* <img src={} alt="Insolita Travel" /> */}
      </div>
      <div className="titleHeader">
        <h1> {customerName} <br/> {title} </h1>
        <button style={{textTransform:"uppercase"}}
          onClick={() => {
            callApi();
          }}
        >
          scopri di più 
        </button>
      </div>
    </div>
  );
};

export default Header;
