
import React, { useState, useEffect, useContext, Fragment } from "react";

import { Accordion, Card, Modal, Button } from 'react-bootstrap';

import { AppContext } from "../context/AppContext";


function Posto(props) {
    const { eventKey, posto } = props
    const { nomePosto, datePosto, infoPosto } = posto
    const [arrow, setArrow] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [infoModal, setInfoModal] = useState({ type: "", data: "" })

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


    const closeModal = () => {
        setShowModal(false)
    }
    const createModal = (type, data) => {
        setInfoModal({
            type,
            data
        })
        setShowModal(true)
    };



    //title:titolo header, type:"transport", "accomodation", "img",
    //data:{oggetto} oppure "url_immagine", actions:button (eventualmente da implementare)
    function ModalCustom() {
        const { type, data } = infoModal

        return (
            <Modal show={showModal} onHide={closeModal}
            dialogClassName="largeModal">

                {type === "modal-transport" &&
                    <>  
                        <Modal.Header closeButton>
                            <Modal.Title><h3>{data.name}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="transportsIcon w-100"><i className=" fa fa-car"></i>
                            </div>
                            <div className="transportsInfo d-flex">
                                <div className="transportsInfoContainer p-0 m-0">
                                    <h3>{data.name}</h3>
                                    <div className="d-flex v-middle">
                                        <h5>Luogo di ritiro: </h5><span className="small-text">{data.pickup.name}</span>
                                        <h5>Data di ritiro: </h5><span className="small-text">{convertDate(data.withdrawalDate)}</span>
                                    </div>
                                    <div className="d-flex v-middle">
                                        <h5>Luogo di rilascio: </h5><span className="small-text">{data.return.name}</span>
                                        <h5>Data di rilascio: </h5><span className="small-text">{convertDate(data.releaseDate)}</span>
                                    </div>
                                    <h5>Il noleggio auto comprende</h5>
                                    <div className="small-text p-0 m-0">
                                        <div>
                                            {data.note}
                                        </div>
                                    </div>
                                    <div className="d-flex v-middle">
                                        <h5>Sito web: </h5>
                                        <span className="small-text"><a href="www.rentcar.it">www.rentcar.it</a></span>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </>
                }
                {type === "modal-accomodation" &&
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title><h3>{data.name}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="accomodation row" >
                                <h5>{data.typology}</h5>
                                <div className="accomodationFotoGallery col-6 col-md-6 col-sm-12" >
                                    {data.images.map(((accImg, index) => (
                                        <Fragment key={accImg.id}>
                                            {accImg &&
                                                <div className="accomodationFoto" style={{ backgroundImage: `url(${accImg.image})` }}></div>
                                            }
                                        </Fragment>
                                    )))}
                                </div>
                                <h5>Descrizione</h5>
                                <div className="small-text">{data.description}</div>
                                <h5>Ristorante</h5>
                                <div className="small-text">{data.descriptionRestaurant}</div>
                                <h5>Camere</h5>
                                <div className="small-text">{data.descriptionRooms}</div>
                                <h5>Camere</h5>
                                <div className="small-text">{data.descriptionServices}</div>
                                <h5>Contatti</h5>
                                <div className="small-text"><a href={data.contact.website}>{data.contact.website}</a> - {data.contact.email}</div>
                                <div className="small-text">{data.contact.phone} - {data.contact.address}</div>

                            </div>
                        </Modal.Body>
                    </>
                }

            </Modal>

        )
    }

    useEffect(() => {
        // console.log(infoPosto[0].days[0].images[0].image)

    }, [])

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

    Descrizione (fotoGrande+Descrizione)
    Accomodation[(alternativa)
    Images
    Descrizione accomodation (che apre modal)

    Transport (apre modal)
    Icon (included not included)


    */
    return (
        <>
            <ModalCustom />
            <Card>

                <Accordion.Toggle as={Card.Header} eventKey={eventKey} onClick={() => { setArrow(!arrow) }}>
                    <Card.Header className="accordionCardHeader" >
                        <div>
                            <span>{posto.nomePosto}
                                <h2 className="ml-3 text-gray display-inline">
                                    {groupData(posto.datePosto)}
                                </h2>
                            </span>
                            {arrow ? <i className="fa fa-angle-up text-gray float-right"></i> : <i className="fa fa-angle-down text-gray float-right"></i>}
                        </div>
                    </Card.Header>
                </Accordion.Toggle>


                <Accordion.Collapse eventKey={eventKey}>

                    <Card.Body>

                        {infoPosto.map((info, index) => (
                            <div key={index}>
                                <div className="titoloGiorno">
                                    <h1 className="display-inline">{info.days[0].name}</h1>
                                    <h2 className="ml-3 text-gray display-inline">
                                        {convertDate(info.dayDate)}
                                    </h2>
                                </div>

                                <div className="headerFotoContainer">
                                    {info.days[0].images.map(((bgImg, index) => (
                                        <Fragment key={bgImg.id}>
                                            <div className="headerFoto" style={{ backgroundImage: `url(${bgImg.image})` }}></div>
                                        </Fragment>
                                    )))}
                                </div>

                                {/* da intendere come array da mappare? è un solo valore nel json */}
                                <div className="description small-text">
                                    {info.days[0].description}
                                </div>

                                {/* da intendere come array da mappare? è un solo valore nel json */}
                                <div className="transportsContainer hover-section row" onClick={() => { createModal("modal-transport", info.transports[0]) }}>
                                    {info.transports[0] &&
                                        <>
                                            <div className="transportsInfo d-flex">
                                                <div className="transportsIcon"><i className=" fa fa-car"></i></div>
                                                <div className="transportsInfoContainer">
                                                    <h3>{info.transports[0].name}</h3>
                                                    <div className="d-flex v-middle">
                                                        <h4 className="text-uppercase d-flex">Luogo di ritiro: </h4>
                                                        <span className="tag">{info.transports[0].pickup.name}</span>
                                                    </div>
                                                    <div className="d-flex v-middle">
                                                        <h4 className="text-uppercase d-flex">Luogo di partenza: </h4>
                                                        <span className="tag">{info.transports[0].return.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className="accomodationList">
                                    {info.accomodations.map(((acc, index) => (
                                        <Fragment key={acc.id}>
                                            {info.accomodations.length > 1 && <div className="titoloAlternativa">Alternativa {index + 1}</div>}
                                            <div className="accomodation row" >

                                                <div className="accomodationFotoGallery col-6 col-md-6 col-sm-12" >

                                                    {acc.images.map(((accImg, index) => (
                                                        <Fragment key={accImg.id}>
                                                            {accImg &&
                                                                <div className="accomodationFoto" style={{ backgroundImage: `url(${accImg.image})` }}></div>
                                                            }
                                                        </Fragment>

                                                    )))}
                                                </div>

                                                <div className="accomodationInfo col-6 col-md-6 col-sm-12 hover-section" onClick={() => { createModal("modal-accomodation", acc) }}>
                                                    <h3 className="display-inline">{acc.name}</h3>
                                                    <div className="small-text description">
                                                        {acc.description}
                                                    </div>
                                                    <div className="tagContainer">
                                                        {acc.tags.map(((accTag, index) => (
                                                            <Fragment key={accTag.id}>
                                                                {accTag &&
                                                                    <div className="tag">{accTag.name}</div>
                                                                }
                                                            </Fragment>

                                                        )))}
                                                    </div>
                                                </div>

                                            </div>

                                        </Fragment>
                                    )))}


                                </div>

                                <div className="includeOrNot row">
                                    <div className="col-12 includeContainer">
                                        <div className="includeElement">
                                            {info.included &&
                                                <>
                                                    <div className="circle" style={{ backgroundColor: "rgb(176, 238, 211)" }}>
                                                        <i className="fa fa-check"></i>
                                                    </div>
                                                    <div className="infoText">{info.included}</div>
                                                </>
                                            }
                                        </div>
                                        <div className="includeElement">
                                            {info.notIncluded &&
                                                <>
                                                    <div className="circle" style={{ backgroundColor: "rgb(253, 209, 218)" }}>
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                    <div className="infoText">{info.notIncluded}</div>
                                                </>
                                            }
                                        </div>
                                    </div>

                                </div>

                            </div>


                        ))}
                    </Card.Body>

                </Accordion.Collapse >
            </Card>
        </>
    )
}

export default Posto
