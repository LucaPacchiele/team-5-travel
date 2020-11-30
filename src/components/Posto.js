
import React, { useState, useEffect, useContext } from "react";

import { Accordion, Card } from 'react-bootstrap';

import { AppContext } from "../context/AppContext";


function Posto(props) {
    const { eventKey, posto } = props
    const { nomePosto, datePosto, infoPosto } = posto
    const [arrow, setArrow] = useState(true)

    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
    }

    const groupData = (date) => {

        const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
            "Luglio", "Agosto", "Setteombre", "Ottobre", "Novembre", "Dicembre"
        ]

        const first = new Date(date[0])

        if (date.length > 1) {

            const last = new Date(date[date.length - 1])

            if (first.getMonth() === last.getMonth())
                return first.getDate() + " - " + last.getDate() + " " + monthNames[first.getMonth()] + " " + first.getFullYear()

            else
                return first.getDate() + " " + monthNames[first.getMonth()] + " " + first.getFullYear() + " - " +
                    last.getDate() + " " + monthNames[last.getMonth()] + " " + last.getFullYear()

        }
        else {
            return first.getDate() + " " + monthNames[first.getMonth()] + " " + first.getFullYear()
        }
    }

    useEffect(() => {
       // console.log(infoPosto[0].days[0].images[0].image)

    })

    /*
    giorno:
    id
    places.name: nome posto
    position: geografia
    dayDate: data del giorno
    days[0].images.image: sfondo
    */

    /*
    -parte iniziale
    titolo + dayDate
    sfondo grande
    days[0].description

    - trasporti

    */
    return (

        <Card>

            <Accordion.Toggle as={Card.Header} eventKey={eventKey} onClick={() => { setArrow(!arrow) }}>
                <Card.Header className="accordionCardHeader" >
                    <div>
                        <span>{posto.nomePosto}
                            <h2 className="ml-3 text-gray">
                                {groupData(posto.datePosto)}
                            </h2>
                        </span>
                        {arrow ? <i className="fa fa-angle-up text-gray float-right"></i> : <i className="fa fa-angle-down text-gray float-right"></i>}
                    </div>
                </Card.Header>
            </Accordion.Toggle>


            <Accordion.Collapse eventKey={eventKey}>

                <Card.Body>
                    <h1>del asddas {eventKey}</h1>
                    
                       {infoPosto.map((info, index) => (
                        <div key={index}>
                            <h1>ddddddddddd</h1>
                            <div style={{height:300,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage:`url(${infoPosto[0].days[0].images[0].image}`
                            }}></div>
                        </div>


                       ))}
                </Card.Body>

            </Accordion.Collapse>
        </Card>
    )
}

export default Posto
