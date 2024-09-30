import React from "react";
import { useState } from "react";
import { Button, Card, Offcanvas, Row, Col, Form, ListGroup, Accordion } from "react-bootstrap";
import { BsClock, BsArrowRepeat, BsBoxSeam  } from "react-icons/bs";

export default function OrderOptions({show, handleClose}){

    const [count, setCount] = useState(1);

    const handleIncrease = () =>{setCount(count + 1)};

    const handleDecrease = () =>{setCount(count - 1)};

    return(
        <Offcanvas show={show} onHide={handleClose} placement="end" style={{width: '35%'}}>
            <Offcanvas.Header className="border-bottom" closeButton>
                <Offcanvas.Title>
                    Order Options
                </Offcanvas.Title>
                {/* <Button className="btn-close" onClick={handleClose}></Button> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>     
                    <Card.Body>
                        <Card.Title>
                            Basic
                        </Card.Title>
                        <Card.Text as='h5'>The Oldie: Black and White Headshot CA$21.37</Card.Text>
                        <Card.Text>
                                3 Sketches - Black and White - No Background, Shoulders up angle. The perfect way to test me first!
                        </Card.Text>
                        <hr />
                        <Row>
                            <Col className="text-start">
                                <Card.Text>Gig Quantity</Card.Text>
                            </Col>
                            <Col className="text-end">
                                <Button onClick={handleDecrease}>-</Button>
                                <span className="mx-2">{count}</span>
                                <Button onClick={handleIncrease}>+</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                
                <br />
                <h6>Upgrade your order with extras</h6>

                <Card className="mb-3">
                    <Card.Body>
                        <Row>
                            <Col className="text-start" style={{ whiteSpace: 'nowrap'}}>
                                <Card.Title>Extra-fast 2-day delivery</Card.Title>
                            </Col>
                            <Col className="text-end">
                                <Form>
                                    <Form.Check type="checkbox"></Form.Check>
                                </Form>
                            </Col>
                        </Row>
                        CA $14.23
                    </Card.Body>
                </Card>

                <Card className="mb-3">
                    <Card.Body>
                        <Row>
                            <Col className="text-start" style={{ whiteSpace: 'nowrap'}}>
                                <Card.Title>Additional Figures (+3 days)</Card.Title>
                                additional character to be added to your illustration.
                            </Col>
                            <Col className="text-end">
                                <Form>
                                    <Form.Check type="checkbox"></Form.Check>
                                </Form>
                            </Col>
                        </Row>
                        CA $21.35
                    </Card.Body>
                </Card>

                <Card className="mb-3">
                    <Card.Body>
                        <Row>
                            <Col className="text-start">
                                <Card.Title>Animated Gif (+2 days)</Card.Title>
                            </Col>
                            <Col className="text-end">
                                <Form>
                                    <Form.Check type="checkbox"></Form.Check>
                                </Form>
                            </Col>
                        </Row>
                        CA $28.47
                    </Card.Body>
                </Card>

                <Card className="border-0" style={{backgroundColor: '#f0f0f0'}}>
                    <Card.Body className="ms-3 me-3" >
                        <Card.Title>CA$14.23</Card.Title>
                        <Card.Text>Single Order</Card.Text>
                        <hr />
                        <Accordion className="custom-accordion">
                            <Accordion.Item eventKey="0" style={{backgroundColor: '#f0f0f0'}}>
                                <Accordion.Header>
                                    <BsBoxSeam className="me-2 "/> Basic Package
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item className="border-0 pb-0 pt-0" style={{backgroundColor: '#f0f0f0'}} >3 Figures</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Include Source File</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Printable Resolution File</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>1 Panel</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Shipping</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="mt-2"> 
                            <BsClock className="me-1" /> 5 day Delivery
                        </div>

                        <div className="mt-2"> 
                            <BsArrowRepeat className="me-1" /> 3 Revisions
                        </div>


                        {/* <ListGroup>
                            <ListGroup.Item className="border-0" style={{backgroundColor: '#f0f0f0', paddingLeft: 0, paddingRight: 0}} >
                            <Accordion className="custom-accordion">
                            <Accordion.Item eventKey="0" style={{backgroundColor: '#f0f0f0'}}>
                                <Accordion.Header>
                                    <BsBoxSeam className="me-1 "/> Basic Package
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item className="border-0 pb-0 pt-0" style={{backgroundColor: '#f0f0f0'}} >3 Figures</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Include Source File</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Printable Resolution File</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>1 Panel</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Shipping</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor: '#f0f0f0', paddingLeft: 0}}>
                                <BsClock /> 5 Day Delivery
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" style={{backgroundColor: '#f0f0f0', paddingLeft: 0}}>
                                <BsArrowRepeat /> 3 Revisions
                            </ListGroup.Item>
                        </ListGroup> */}


                    </Card.Body>
                </Card>

            </Offcanvas.Body>
            
            <Card className="p-3 border-top text-center" >
                <Button className="w-100" variant="primary" onClick={handleClose}>Place Order (CA$14.23)</Button>
                <Card.Text style={{fontSize:'small'}}>you wont be charged yet</Card.Text>
            </Card>
        </Offcanvas>
    )
}