import React from "react";
import { Card, Col, Row, Button, Container, ListGroup } from "react-bootstrap";
import { BsClock, BsArrowRepeat } from "react-icons/bs";

export default function PackageOptions(){

    return(


        // <Container className="text-center mt-5">
        //     <Container>
        //         <Row>
        //             <Col className="equal-height">
        //                 <Card className="h-100">
        //                     <Card.Body className="d-flex flex-column">
        //                         <Card.Title as='h4'>Basic</Card.Title>
        //                         <Card.Text as='h5'>The Oldie: Black and White Headshot CA$21.37</Card.Text>
        //                         <Card.Text>
        //                             3 Sketches - Black and White - No Background, Shoulders up angle. The perfect way to test me first!
        //                             <br />
        //                             <br />
        //                             <BsClock /> 7-day delivery  <BsArrowRepeat /> 3 Revisions
        //                         </Card.Text>
        //                         {/* <Card.Text>
        //                             <p>3 Sketches - Black and White - No Background, Shoulders up angle. The perfect way to test me first!</p>
        //                         </Card.Text>
        //                         <Card.Text className="d-flex flex-row gap-4 justify-content-center">
        //                             <p><BsClock /> 7-day delivery</p>  
        //                             <p><BsArrowRepeat /> 3 Revisions</p>
        //                         </Card.Text> */}
        //                         <ListGroup className="mb-3">
        //                             <ListGroup.Item>3 Figures</ListGroup.Item>
        //                             <ListGroup.Item>Include Source File</ListGroup.Item>
        //                             <ListGroup.Item>Printable Resolution File</ListGroup.Item>
        //                             <ListGroup.Item>3 Panels</ListGroup.Item>
        //                             <ListGroup.Item>Shipping</ListGroup.Item>
        //                         </ListGroup>
        //                         <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col className="equal-height">
        //                 <Card className="h-100">
        //                     <Card.Body className="d-flex flex-column">
        //                         <Card.Title as='h4'>Standard</Card.Title>
        //                         <Card.Text as='h5'>Meet Me Halfway: Colored, Waist Up  CA$56.99</Card.Text>
        //                         <Card.Text>
        //                             One fully realized professional character art in color, waist up! Includes simple background. 
        //                             <br /> 
        //                             <br />
        //                             <BsClock /> 14-day delivery <BsArrowRepeat /> 3 Revisions
        //                         </Card.Text>
        //                         <ListGroup className="mb-3">
        //                             <ListGroup.Item>1 Figure</ListGroup.Item>
        //                             <ListGroup.Item>Include Source File</ListGroup.Item>
        //                             <ListGroup.Item>Printable Resolution File</ListGroup.Item>
        //                             <ListGroup.Item>Add Background/Scene</ListGroup.Item>
        //                             <ListGroup.Item>Include Colors in Illustration</ListGroup.Item>
        //                             <ListGroup.Item>Commercial Use</ListGroup.Item>
        //                             <ListGroup.Item>1 Panel</ListGroup.Item>
        //                             <ListGroup.Item>Shipping</ListGroup.Item>
        //                         </ListGroup>
        //                         <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col className="equal-height">
        //                 <Card className="h-100">
        //                     <Card.Body className="d-flex flex-column">
        //                         <Card.Title as='h4'>Premium</Card.Title>
        //                         <Card.Text as='h5'>The Full Package (MOST POPULAR!) CA$85.48</Card.Text>
        //                         <Card.Text>
        //                             One professional character art + full body & color. Detailed background & free UNLIMITED revisions! 
        //                             <br /> 
        //                             <br />
        //                             <BsClock /> 21-day delivery <BsArrowRepeat /> Unlimited Revisions
        //                         </Card.Text>
        //                         <ListGroup className="mb-3">
        //                             <ListGroup.Item>1 Figure</ListGroup.Item>
        //                             <ListGroup.Item>Include Source File</ListGroup.Item>
        //                             <ListGroup.Item>Printable Resolution File</ListGroup.Item>
        //                             <ListGroup.Item>Add Background/Scene</ListGroup.Item>
        //                             <ListGroup.Item>Include Colors in Illustration</ListGroup.Item>
        //                             <ListGroup.Item>Commercial Use</ListGroup.Item>
        //                             <ListGroup.Item>1 Panel</ListGroup.Item>
        //                             <ListGroup.Item>Shipping</ListGroup.Item>
        //                         </ListGroup>
        //                         <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         </Row>
        //     </Container>
        // </Container>

        <Container className="text-center mt-5">
            <h1 className="text-start">Compare Packages</h1>
            <Row>
                <Col className="equal-height">
                    <Card className="h-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as='h4'>Basic</Card.Title>
                            <Card.Text as='h5'>The Oldie: Black and White Headshot CA$21.37</Card.Text>
                            <Card.Text>
                                3 Sketches - Black and White - No Background, Shoulders up angle. The perfect way to test me first!
                            </Card.Text>
                            <Card.Text className="d-flex flex-row gap-4 justify-content-center">
                                <span><BsClock /> 7-day delivery</span>  
                                <span><BsArrowRepeat /> 3 Revisions</span>
                            </Card.Text>
                            <ListGroup className="mb-3">
                                <ListGroup.Item>3 Figures</ListGroup.Item>
                                <ListGroup.Item>Include Source File</ListGroup.Item>
                                <ListGroup.Item>Printable Resolution File</ListGroup.Item>
                                <ListGroup.Item>3 Panels</ListGroup.Item>
                                <ListGroup.Item>Shipping</ListGroup.Item>
                            </ListGroup>
                            <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="equal-height">
                    <Card className="h-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as='h4'>Standard</Card.Title>
                            <Card.Text as='h5'>Meet Me Halfway: Colored, Waist Up  CA$56.99</Card.Text>
                            <Card.Text>
                                One fully realized professional character art in color, waist up! Includes simple background.
                            </Card.Text>
                            <Card.Text className="d-flex flex-row gap-4 justify-content-center">
                                <span><BsClock /> 14-day delivery</span>  
                                <span><BsArrowRepeat /> 3 Revisions</span>
                            </Card.Text>
                            <ListGroup className="mb-3">
                                <ListGroup.Item>1 Figure</ListGroup.Item>
                                <ListGroup.Item>Include Source File</ListGroup.Item>
                                <ListGroup.Item>Printable Resolution File</ListGroup.Item>
                                <ListGroup.Item>Add Background/Scene</ListGroup.Item>
                                <ListGroup.Item>Include Colors in Illustration</ListGroup.Item>
                                <ListGroup.Item>Commercial Use</ListGroup.Item>
                                <ListGroup.Item>1 Panel</ListGroup.Item>
                                <ListGroup.Item>Shipping</ListGroup.Item>
                            </ListGroup>
                            <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="equal-height">
                    <Card className="h-100">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as='h4'>Premium</Card.Title>
                            <Card.Text as='h5'>The Full Package (MOST POPULAR!) CA$85.48</Card.Text>
                            <Card.Text>
                                One professional character art + full body & color. Detailed background & free UNLIMITED revisions! 
                            </Card.Text>
                            <Card.Text className="d-flex flex-row gap-4 justify-content-center">
                                <span><BsClock /> 21-day delivery</span>
                                <span><BsArrowRepeat /> Unlimited Revisions</span>
                            </Card.Text>
                            <ListGroup className="mb-3">
                                <ListGroup.Item>1 Figure</ListGroup.Item>
                                <ListGroup.Item>Include Source File</ListGroup.Item>
                                <ListGroup.Item>Printable Resolution File</ListGroup.Item>
                                <ListGroup.Item>Add Background/Scene</ListGroup.Item>
                                <ListGroup.Item>Include Colors in Illustration</ListGroup.Item>
                                <ListGroup.Item>Commercial Use</ListGroup.Item>
                                <ListGroup.Item>1 Panel</ListGroup.Item>
                                <ListGroup.Item>Shipping</ListGroup.Item>
                            </ListGroup>
                            <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        // <>
        // <h1 className="text-start">Compare Packages</h1>
        //         <Row>
        //             <Col className="equal-height">
        //                 <Card className="h-100">
        //                     <Card.Body className="d-flex flex-column">
        //                         <Card.Title as='h4'>Basic</Card.Title>
        //                         <Card.Text as='h5'>The Oldie: Black and White Headshot CA$21.37</Card.Text>
        //                         <Card.Text>
        //                             3 Sketches - Black and White - No Background, Shoulders up angle. The perfect way to test me first!
        //                         </Card.Text>
        //                         <Card.Text className="d-flex flex-row gap-4 justify-content-center">
        //                             <span><BsClock /> 7-day delivery</span>  
        //                             <span><BsArrowRepeat /> 3 Revisions</span>
        //                         </Card.Text>
        //                         <ListGroup className="mb-3">
        //                             <ListGroup.Item>3 Figures</ListGroup.Item>
        //                             <ListGroup.Item>Include Source File</ListGroup.Item>
        //                             <ListGroup.Item>Printable Resolution File</ListGroup.Item>
        //                             <ListGroup.Item>3 Panels</ListGroup.Item>
        //                             <ListGroup.Item>Shipping</ListGroup.Item>
        //                         </ListGroup>
        //                         <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col className="equal-height">
        //                 <Card className="h-100">
        //                     <Card.Body className="d-flex flex-column">
        //                         <Card.Title as='h4'>Standard</Card.Title>
        //                         <Card.Text as='h5'>Meet Me Halfway: Colored, Waist Up  CA$56.99</Card.Text>
        //                         <Card.Text>
        //                             One fully realized professional character art in color, waist up! Includes simple background.
        //                         </Card.Text>
        //                         <Card.Text className="d-flex flex-row gap-4 justify-content-center">
        //                             <span><BsClock /> 14-day delivery</span>  
        //                             <span><BsArrowRepeat /> 3 Revisions</span>
        //                         </Card.Text>
        //                         <ListGroup className="mb-3">
        //                             <ListGroup.Item>1 Figure</ListGroup.Item>
        //                             <ListGroup.Item>Include Source File</ListGroup.Item>
        //                             <ListGroup.Item>Printable Resolution File</ListGroup.Item>
        //                             <ListGroup.Item>Add Background/Scene</ListGroup.Item>
        //                             <ListGroup.Item>Include Colors in Illustration</ListGroup.Item>
        //                             <ListGroup.Item>Commercial Use</ListGroup.Item>
        //                             <ListGroup.Item>1 Panel</ListGroup.Item>
        //                             <ListGroup.Item>Shipping</ListGroup.Item>
        //                         </ListGroup>
        //                         <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col className="equal-height">
        //                 <Card className="h-100">
        //                     <Card.Body className="d-flex flex-column">
        //                         <Card.Title as='h4'>Premium</Card.Title>
        //                         <Card.Text as='h5'>The Full Package (MOST POPULAR!) CA$85.48</Card.Text>
        //                         <Card.Text>
        //                             One professional character art + full body & color. Detailed background & free UNLIMITED revisions! 
        //                         </Card.Text>
        //                         <Card.Text className="d-flex flex-row gap-4 justify-content-center">
        //                             <span><BsClock /> 21-day delivery</span>
        //                             <span><BsArrowRepeat /> Unlimited Revisions</span>
        //                         </Card.Text>
        //                         <ListGroup className="mb-3">
        //                             <ListGroup.Item>1 Figure</ListGroup.Item>
        //                             <ListGroup.Item>Include Source File</ListGroup.Item>
        //                             <ListGroup.Item>Printable Resolution File</ListGroup.Item>
        //                             <ListGroup.Item>Add Background/Scene</ListGroup.Item>
        //                             <ListGroup.Item>Include Colors in Illustration</ListGroup.Item>
        //                             <ListGroup.Item>Commercial Use</ListGroup.Item>
        //                             <ListGroup.Item>1 Panel</ListGroup.Item>
        //                             <ListGroup.Item>Shipping</ListGroup.Item>
        //                         </ListGroup>
        //                         <Button className="d-grid mx-auto col-6 btn-lg mt-auto">Continue</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         </Row>
        // </>
    )
}