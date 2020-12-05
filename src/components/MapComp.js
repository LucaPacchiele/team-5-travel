import React, { useContext, useEffect } from "react";
import 'leaflet/dist/leaflet.css'
import '../assets/MapComp.css'
import { AppContext } from "../context/AppContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Card, Button, Breadcrumb } from 'react-bootstrap'

const MapComp = () => {

  const { data } = useContext(AppContext)



  const arrCitta = []
  const coordsCitta = []


  const filtFunc = data.rows.map(x => {
    return arrCitta.push(x.places[0].name), coordsCitta.push(x.places[0].position.coords)
  });

  const filt = arrCitta.filter((x, index) => {
    return arrCitta.indexOf(x) === index;
  })
  console.log(`filtro : ${filt}`)
  coordsCitta.map(el => {
    console.log(el)
  })


  return (
    <>


      <div className="mapComp container-fluid">

        <Card className='mapComp_cardContainer'>
          <Card.Body>
            <div className="mapComp_cardContainer_mapWrapper">
              <MapContainer style={{ width: '100%', height: 300 }} center={coordsCitta[0]} zoom={7} scrollWheelZoom={false}>


                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coordsCitta.map(coord => (<Marker position={coord}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
                </Marker>
                ))}
                {/* <Marker position={(position)}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
              </MapContainer>
            </div>

            <Card.Title className="cardTitle">{data.title}</Card.Title>
            <Breadcrumb className="breadCrumb">
              {filt.map(el => (
                <Breadcrumb.Item active>{el}</Breadcrumb.Item>
              ))}

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
