import React, { useContext } from "react";

import { Accordion, Card, Button } from 'react-bootstrap';

import { AppContext } from "../context/AppContext";



const ListaGiorni = () => {

  const { data } = useContext(AppContext)

  return (
    <div className="ListaGiorni">
      <div className="row">
        <div className="col">

          <Accordion defaultActiveKey="0">
            {/* è possibile scrivere al posto di <div className="card" style={{color:"#0000ff"}}> che chiama la classe card di bootstrap
            direttamente il componente <Card style={{color:"#0000ff"}}> della libreria react-bootstrap */}
            <Card style={{color:"#0000ff"}}>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="accordionCardHeader">Click me! </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                <div className="accordionCardHeader">prova collapse </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>
      </div>
    </div>
  )
}

export default ListaGiorni
