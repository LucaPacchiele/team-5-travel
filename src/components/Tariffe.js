import React, { useContext } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Tariffe = () => {
  const { data } = useContext(AppContext);
  const {priceTotal} = data
  return (
    <div className="container ml-5 mt-5 mr-5 pl-5 pr-5">
      <div className="row">
        <div className="col">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Button} variant="" eventKey="0">
                <Card.Header>
                  <h2>TARIFFE</h2>
                  <i className="fas fa-angle-down"></i>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                      <hr/>
                    {data.partecipants.map((elem,index) => (
                        
                        // {console.log("type:",elem.id)}

                        <div className="boxType" key={elem.id}>
                        <p> {elem.type} </p>
                        <p> {elem.price}  </p>
                        </div>
                      
                    ))}
                     <hr/>
                     <div className="text-right">
                        <p>TOTALE</p>
                        <span> {} </span>
                     </div>
                    
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion.Toggle>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Tariffe;
