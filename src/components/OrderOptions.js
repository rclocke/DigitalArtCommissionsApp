import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, Offcanvas, Row, Col, Form, ListGroup, Accordion, Badge } from "react-bootstrap";
import { BsClock, BsArrowRepeat, BsBoxSeam  } from "react-icons/bs";

export default function OrderOptions({show, handleClose, selectedPackage}){

    const [packageCount, setPackageCount] = useState(1);
    const [extraFeatures, setExtraFeatures] = useState([]);
    const [extraFeaturesCount, setExtraFeaturesCount] = useState(0);
    const [expressDelivery, setExpressDelivery] = useState(false);
    const [animatedGif, setAnimatedGif] = useState(false);
    const [gifCount, setGifCount] = useState(1);
    const [additionalFigures, setAdditonalFigures] = useState(false);
    const [additionalFiguresCount, setAdditonalFiguresCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    // const handleIncrease = () =>{
    //     setPackageCount(packageCount + 1)
    //     //setTotalPrice(totalPrice + selectedPackage.price)
    // };

    const addExtraFeature = (feature) => {
        setExtraFeatures([...extraFeatures, feature]);
    };

    const handleIncrease = () => {setPackageCount(packageCount + 1)};
    const handleDecrease = () => {packageCount > 1 && setPackageCount(packageCount -1)};

    const handleFigureIncrease = () => {setAdditonalFiguresCount(additionalFiguresCount + 1)};
    const handleFigureDecrease = () => {additionalFiguresCount > 1 && setAdditonalFiguresCount(additionalFiguresCount - 1)};

    const handleGifIncrease = () => {setGifCount(gifCount + 1);};

    const handleGifDecrease = () => {
        if (gifCount > 1) setGifCount(gifCount - 1); 
    };

    const handleExpressDeliveryCheck = (checked) => {
        setExpressDelivery(checked);
    };

    // const handleDecrease = () =>{
    //     if(packageCount > 1){
    //         setPackageCount(packageCount - 1);
    //         //setTotalPrice(totalPrice - selectedPackage.price)
    //     }
    // };

    useEffect(() =>{
        if(selectedPackage){
            //setTotalPrice((selectedPackage.price * packageCount).toFixed(2));
            const basePrice = selectedPackage.price * packageCount;
            const deliveryCharge = expressDelivery ? 14.26 : 0;
            const animatedGifCharge = animatedGif ? (28.47 * gifCount) : 0;
            const additionalFigureCharge = additionalFigures ? (21.35 * additionalFiguresCount) : 0;
            const calculatedTotal = Math.round((basePrice + deliveryCharge + additionalFigureCharge + animatedGifCharge) * 100) / 100;
            setTotalPrice(calculatedTotal);
        }
    }, [selectedPackage, packageCount, expressDelivery, additionalFigures, additionalFiguresCount, animatedGif, gifCount]);

    // useEffect(() => {
    //     // Reset states when the Offcanvas is closed
    //     if (!show) {
    //         setPackageCount(1);
    //         setGifCount(1);
    //         setAdditonalFiguresCount(1);
    //         setExpressDelivery(false);
    //         setAnimatedGif(false);
    //         setAdditonalFigures(false);
    //         setTotalPrice(selectedPackage.price);
    //     }
    // }, [show, selectedPackage]);

    const handleCloseAndReset = () => {
        setPackageCount(1);
        setExtraFeatures([]);
        setExtraFeaturesCount(0);
        setGifCount(1);
        setAdditonalFiguresCount(1);
        setExpressDelivery(false);
        setAnimatedGif(false);
        setAdditonalFigures(false);
        setTotalPrice(selectedPackage.price);
        handleClose(); // Call the existing close function to actually close the Offcanvas
    };
    

    return(
        <Offcanvas show={show} onHide={handleCloseAndReset} placement="end" style={{width: '35%'}}>
            <Offcanvas.Header className="border-bottom" closeButton>
                <Offcanvas.Title>
                    Order Options
                </Offcanvas.Title>
                {/* <Button className="btn-close" onClick={handleClose}></Button> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>     
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <span>{selectedPackage.title}</span>
                            <span>CA${totalPrice}</span>
                        </Card.Title>
                        <Card.Text as='h5'>{selectedPackage.description}</Card.Text>
                        <Card.Text>
                                {selectedPackage.details}
                        </Card.Text>
                        <hr />
                        <Row>
                            <Col className="text-start">
                                <Card.Text>Gig Quantity</Card.Text>
                            </Col>
                            <Col className="text-end">
                                <Button onClick={handleDecrease}>-</Button>
                                <span className="mx-2">{packageCount}</span>
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
                                <Card.Title>Extra-fast {selectedPackage.priorityDelivery}-day delivery</Card.Title>
                            </Col>
                            <Col className="text-end">
                                <Form>
                                    {/* <Form.Check type="checkbox" onChange={(e) => handleExpressDeliveryCheck(e.target.checked)}></Form.Check> */}
                                    <Form.Check 
                                        type="checkbox" 
                                        onChange={(e) => {
                                            handleExpressDeliveryCheck(e.target.checked);
                                            e.target.checked ? 
                                                setExtraFeaturesCount(extraFeaturesCount + 1) : 
                                                setExtraFeaturesCount(extraFeaturesCount - 1);
                                            e.target.checked ? 
                                                addExtraFeature(`Extra-fast ${selectedPackage.priorityDelivery}-day delivery`) : 
                                                setExtraFeatures(extraFeatures.filter(feature => feature !== `Extra-fast ${selectedPackage.priorityDelivery}-day delivery`));
                                        }}>
                                    </Form.Check>
                                </Form>
                            </Col>
                        </Row>
                        CA $14.26
                    </Card.Body>
                </Card>

                <Card className="mb-3">
                    <Card.Body>
                        <Row>
                            <Col className="text-start" style={{ whiteSpace: 'nowrap'}}>
                                <Card.Title>Additional Figures (+3 days) <Badge bg="primary">Popular</Badge></Card.Title>
                            </Col>
                            <Col className="text-end">
                                <Form>
                                    <Form.Check 
                                        type="checkbox" 
                                        onChange={(e) => {
                                            setAdditonalFigures(e.target.checked);
                                            e.target.checked ? 
                                                setExtraFeaturesCount(extraFeaturesCount + 1) : 
                                                setExtraFeaturesCount(extraFeaturesCount - 1);
                                            e.target.checked ? 
                                                addExtraFeature('Additional Figures') : 
                                                setExtraFeatures(extraFeatures.filter(feature => feature !== 'Additional Figures'));    
                                            // e.target.checked ? 
                                            //     addExtraFeature(`Additional Figures X ${additionalFiguresCount}`) : 
                                            //     setExtraFeatures(extraFeatures.filter(feature => feature !== `Additional Figures X ${additionalFiguresCount}`));
                                        }}>
                                    </Form.Check>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>Additional character to be added to your illustration.</Col>
                        </Row>
                        <hr hidden={!additionalFigures}/>
                        <Row>
                            <Col>CA $21.35</Col>
                            <Col className="text-end" hidden={!additionalFigures}>
                                <Button onClick={handleFigureDecrease}>-</Button>
                                <span className="mx-2">{additionalFiguresCount}</span>
                                <Button onClick={handleFigureIncrease}>+</Button>
                            </Col>
                        </Row>
                       
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
                                    <Form.Check 
                                        type="checkbox" 
                                        onChange={(e) => {
                                            setAnimatedGif(e.target.checked)
                                            e.target.checked ? 
                                                setExtraFeaturesCount(extraFeaturesCount + 1) : 
                                                setExtraFeaturesCount(extraFeaturesCount - 1);
                                            e.target.checked ? 
                                                addExtraFeature('Animated Gif') : 
                                                setExtraFeatures(extraFeatures.filter(feature => feature !== 'Animated Gif'));
                                        }}>
                                    </Form.Check>
                                </Form>
                            </Col>
                        </Row>
                        <Row> 
                            <Col>I will create a simple giff your commission</Col>
                        </Row>
                        <hr hidden={!animatedGif}/>
                        <Row>
                            <Col>CA $28.47</Col>
                            <Col className="text-end" hidden={!animatedGif}>
                                <Button onClick={handleGifDecrease}>-</Button>
                                <span className="mx-2">{gifCount}</span>
                                <Button onClick={handleGifIncrease}>+</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="border-0" style={{backgroundColor: '#f0f0f0'}}>
                    <Card.Body className="ms-3 me-3" >
                        <Card.Title>CA${totalPrice}</Card.Title>
                        <Card.Text>Single Order</Card.Text>
                        <hr />
                        <Accordion className="custom-accordion">
                            <Accordion.Item eventKey="0" style={{backgroundColor: '#f0f0f0'}}>
                                <Accordion.Header>
                                    <BsBoxSeam className="me-2 "/> 
                                    {selectedPackage.title} Package 
                                    <div className="ps-1" hidden={packageCount <= 1}>(x{packageCount})</div>
                                    <div className="ps-1" hidden={extraFeaturesCount <= 0}> + extras (x{extraFeaturesCount})</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {/* <ListGroup>
                                        <ListGroup.Item className="border-0 pb-0 pt-0" style={{backgroundColor: '#f0f0f0'}} >3 Figures</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Include Source File</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Printable Resolution File</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>1 Panel</ListGroup.Item>
                                        <ListGroup.Item className="border-0 pb-0" style={{backgroundColor: '#f0f0f0'}}>Shipping</ListGroup.Item>
                                    </ListGroup> */}
                                    <ListGroup>
                                        {[...selectedPackage.features, ...extraFeatures].map((feature, id) =>(
                                            // <ListGroup.Item key={id} className="border-0 pb-0 pt-0" style={{backgroundColor: '#f0f0f0'}} >{feature}</ListGroup.Item>
                                            <ListGroup.Item key={id} className="border-0 pb-0 pt-0" style={{ backgroundColor: '#f0f0f0' }}>
                                                {feature}
                                                {feature === 'Additional Figures' && additionalFiguresCount > 1 && (
                                                    <span className="ps-1">(x{additionalFiguresCount})</span>
                                                )}
                                                {feature === 'Animated Gif' && gifCount > 1 && (
                                                    <span className="ps-1">(x{gifCount})</span>
                                                )}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="mt-2"> 
                            <BsClock className="me-1" /> {expressDelivery ? selectedPackage.priorityDelivery : selectedPackage.delivery} day Delivery
                        </div>

                        <div className="mt-2"> 
                            <BsArrowRepeat className="me-1" /> {selectedPackage.revisions} Revisions
                        </div>


                    </Card.Body>
                </Card>

            </Offcanvas.Body>
            
            <Card className="p-3 border-top text-center" >
                <Button className="w-100" variant="primary" onClick={handleClose}>Place Order (CA${totalPrice})</Button>
                <Card.Text style={{fontSize:'small'}}>you wont be charged yet</Card.Text>
            </Card>
        </Offcanvas>
    )
}