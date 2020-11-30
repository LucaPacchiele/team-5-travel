import React, { useContext, useEffect } from "react";
import 'leaflet/dist/leaflet.css'
import './MapComp.css'
import { AppContext } from "../context/AppContext";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import {Card, Button, Breadcrumb} from 'react-bootstrap'
const MapComp = () => {

  const { data } = useContext(AppContext)
  const position = [51.505, -0.09]
  
  // for (let i=0; i<=data.rows.length; i++){
  //   let filt = []
  //   if (citta[i] !== citta[i+1]){
  //     return filt.push(citta[i]);
  //   }
  return (
    <>
   
  
    <div className="mapComp">

      <Card className='mapComp_cardContainer'>
        <div className="mapComp_cardContainer_mapWrapper">
      <MapContainer style={{width: 800, height:300, marginTop:30}}center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      
      
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
     <Card.Body>
      <Card.Title className="cardTitle">{data.title}</Card.Title>
        <Breadcrumb className="breadCrumb">
            
            <Breadcrumb.Item active>Siracusa</Breadcrumb.Item>
            <Breadcrumb.Item active>Vendicari</Breadcrumb.Item>
            <Breadcrumb.Item active>Siracusa</Breadcrumb.Item>
        </Breadcrumb>
        <i><h5>Dal {data.dateFrom} al {data.dateTo} </h5></i>
        <i><h5>2 adulti</h5></i>
        <i><h5>7 Giorni - 6 Notti</h5></i>
      
      </Card.Body>
      </Card>


    </div>






  </>
  )
}

export default MapComp
