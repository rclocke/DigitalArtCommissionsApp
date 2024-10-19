import React from "react";
//import { useState } from "react";
import { Card, Col, Row, Button, Container, ListGroup } from "react-bootstrap";
import { BsClock, BsArrowRepeat } from "react-icons/bs";
import { packageDetails } from "../data/packageDetails";
//import OrderOptions from "./OrderOptions";

export default function PackageOptions({handleShow}){
    // const [show, setShow] = useState(false);
    
    // // Function to open the offcanvas
    // const handleShow = () => setShow(true);

    // // Function to close the offcanvas
    // const handleClose = () => setShow(false);

    return(

        <Container className="text-center mt-5">
            <h1 className="text-start">Compare Packages</h1>
            <Row>
                <Col xs='12' md='4' className="equal-height mb-4">
                    <Card className="h-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as='h4'>{packageDetails.basic.title}</Card.Title>
                            <Card.Text as='h5'>{packageDetails.basic.description}</Card.Text>
                            <Card.Text as='h5'>CA${packageDetails.basic.price}</Card.Text>
                            <Card.Text>
                                {packageDetails.basic.details}
                            </Card.Text>
                            <Card.Text className="d-flex flex-row gap-4 justify-content-center">
                                <span><BsClock /> {packageDetails.basic.delivery}-day delivery</span>  
                                <span><BsArrowRepeat /> {packageDetails.basic.revisions} Revisions</span>
                            </Card.Text>
                            <ListGroup className="mb-3">
                                {packageDetails.basic.features.map((feature, id) => (
                                    <ListGroup.Item key={id}>{feature}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            {/* <Button className="d-grid mx-auto col-6 btn-lg mt-auto" onClick={handleShow}>Continue</Button> */}
                            <Button className="d-grid mx-auto col-6 btn-lg mt-auto" onClick={() => handleShow('basic')}>Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs='12' md='4' className="equal-height mb-4">
                    <Card className="h-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as='h4'>{packageDetails.standard.title}</Card.Title>
                            <Card.Text as='h5'>{packageDetails.standard.description}</Card.Text>
                            <Card.Text as='h5'>CA${packageDetails.standard.price}</Card.Text>
                            <Card.Text>
                                {packageDetails.standard.details}
                            </Card.Text>
                            <Card.Text className="d-flex flex-row gap-4 justify-content-center">
                                <span><BsClock /> {packageDetails.standard.delivery}-day delivery</span>  
                                <span><BsArrowRepeat /> {packageDetails.standard.revisions} Revisions</span>
                            </Card.Text>
                            <ListGroup className="mb-3">
                                {packageDetails.standard.features.map((feature,id) => (
                                    <ListGroup.Item key={id}>{feature}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            {/* <Button className="d-grid mx-auto col-6 btn-lg mt-auto" onClick={handleShow}>Continue</Button> */}
                            <Button className="d-grid mx-auto col-6 btn-lg mt-auto" onClick={() => handleShow('standard')}>Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs='12' md='4' className="equal-height mb-4">
                    <Card className="h-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as='h4'>{packageDetails.premium.title}</Card.Title>
                            <Card.Text as='h5'>{packageDetails.premium.description}</Card.Text>
                            <Card.Text as='h5'>CA${packageDetails.premium.price}</Card.Text>
                            <Card.Text>
                                {packageDetails.premium.details}
                            </Card.Text>
                            <Card.Text className="d-flex flex-row gap-4 justify-content-center">
                                <span><BsClock /> {packageDetails.premium.delivery}-day delivery</span>
                                <span><BsArrowRepeat /> {packageDetails.premium.revisions} Revisions</span>
                            </Card.Text>
                            <ListGroup className="mb-3">
                                {packageDetails.premium.features.map((feature, id) => (
                                    <ListGroup.Item key={id}>{feature}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            {/* <Button className="d-grid mx-auto col-6 btn-lg mt-auto" onClick={handleShow}>Continue</Button> */}
                            <Button className="d-grid mx-auto col-6 btn-lg mt-auto" onClick={() => handleShow('premium')}>Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <OrderOptions show={show} handleClose={handleClose} /> */}
        </Container>

    )
}