import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";

export default function AboutThisGig(){

    return(
        <Card>
            <Card.Body>
                <Card.Title>About This Gig</Card.Title>
                <Card.Text>
                Hi there! My name is Windlist (aka Victoria) and I draw cartoons and anime of fanart, oc and character concepts. I 
                specialize in cartoon and anime styles but I don't mind expanding my horizons a bit. All I ask is if you can message me 
                in advance if this is the case :)
                </Card.Text>
                <Card.Text>
                        What I do:<br/>female/male/they/them (LGBTQ+ friendly, everyone is welcomed) fanart
                </Card.Text>
                <Card.Text>
                        What I wont do:<br/>nsfw
                </Card.Text>
                <Card.Text>  
                        Please note: ALL of my prices are negotiable, as I understand the kind of times we are living in.
                </Card.Text>
                <Card.Text as='h6'>
                        Additional offers available
                </Card.Text>
                <ListGroup>
                    <ListGroup.Item className="border-0">
                        <ul >
                            <li className="mb-2">
                                Extra poses ($15 per pose and extra 3-day delivery time) **NOTE: Premium purchases 
                                include 1 free additional pose**</li>
                            <li className="mb-2">FREE Revisions</li>
                            <li className="mb-2">Animated GIFS (discord sticker sizes available) **Extra $20**</li>
                            <li className="mb-2">FREE HD artwork</li>
                            <li>Prices include regular shipping/delivery, extra shipping costs (i.e. if physical copies are requested) 
                                vary & can be determined upon messaging me.</li>
                        </ul>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Text>
                    **PLEASE be as detailed as possible as I want to meet your expectations as best as I can. I have provided 
                    questions for this reason whilst you submit your request so please answer them as detailed as possible**
                </Card.Text>
                <Card.Text>
                    I look forward to working with you!
                </Card.Text>
                <Card.Text>
                    Sincerely, <br />Windlist (aka Victoria)
                </Card.Text>
                <hr />
                <Row className="g-0">
                    <Col>
                        <p>Main type <br /> Cartoon</p>
                    </Col>
                    <Col>
                        <p>Illustration style <br /> Other</p>
                    </Col>
                    <Col>
                        <p>Image file format <br /> JPG</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}



// import React from "react";
// import { Card, ListGroup, Row, Col } from "react-bootstrap";

// export default function AboutThisGig(){

//     return(
//         <Card>
//             <Card.Body>
//                 <Card.Title>About This Gig</Card.Title>
//                 <Card.Text>
//                     Hi there! My name is Windlist and I draw cartoons and anime of fanart, oc and character concepts. I specialize in 
//                     cartoon and anime styles but I don't mind expanding my horizons a bit. All I ask is if you can message me in advance
//                     if this is the case :) <br /> <br />
//                     What I do:<br/>
//                     female/male/they/them (LGBTQ+ friendly, everyone is welcomed) fanart <br /> <br />
//                     Please note: ALL of my prices are negotiable, as I understand the kind of times we are living in. <br/>
//                 </Card.Text> 
//                 <h6>Additional offers available</h6>
//                 <ListGroup>
//                     <ListGroup.Item className="border-0">
//                         <ul >
//                             <li className="mb-2">Extra poses ($20 per pose) **NOTE: Premium purchases include 1 free additional pose**</li>
//                             <li className="mb-2">FREE Revisions</li>
//                             <li className="mb-2">Animated GIFS (discord sticker sizes available) **Extra $20**</li>
//                             <li className="mb-2">FREE HD artwork</li>
//                             <li>Prices include regular shipping, extra shipping cost varies.</li>
//                         </ul>
//                     </ListGroup.Item>
//                 </ListGroup>
//                 <Card.Text>
//                     **PLEASE be as detailed as possible as I want to meet your expectations as best as I can. I have provided questions 
//                     for this reason whilst you submit your request so please answer them as detailed as possible** <br /> <br />
//                     I look forward to working with you! <br /> <br />
//                     Sincerely, <br />
//                     Windlist
//                 </Card.Text>
//                 <hr />
//                 <Row className="g-0">
//                     <Col>
//                         <p>Main type <br /> Cartoon</p>
//                     </Col>
//                     <Col>
//                         <p>Illustration style <br /> Other</p>
//                     </Col>
//                     <Col>
//                         <p>Image file format <br /> JPG</p>
//                     </Col>
//                 </Row>
//             </Card.Body>
//         </Card>
//     )
// }








// import React from "react";
// import { Card, ListGroup, Row, Col } from "react-bootstrap";

// export default function AboutThisGig(){

//     return(
//         <Card>
//             <Card.Body>
//                 <Card.Title>About This Gig</Card.Title>
//                 <Card.Text>
//                     <p>Hi there! My name is Windlist and I draw cartoons and anime of fanart, oc and character concepts. I specialize 
//                         in cartoon and anime styles but I don't mind expanding my horizons a bit. All I ask is if you can message me in 
//                         advance if this is the case :)</p>
//                     <p>What I do:<br/>female/male/they/them (LGBTQ+ friendly, everyone is welcomed) fanart</p>
//                     <p>Please note: ALL of my prices are negotiable, as I understand the kind of times we are living in.</p>
//                     <p1>Additional offers available</p1>
//                     {/* <ListGroup>
//                         <ListGroup.Item className="border-0">
//                             Extra poses ($20 per pose) **NOTE: Premium purchases include 1 free additional pose**
//                         </ListGroup.Item>
//                         <ListGroup.Item className="border-0">FREE Revisions</ListGroup.Item>
//                         <ListGroup.Item className="border-0">Animated GIFS (discord sticker sizes available) **Extra $20**</ListGroup.Item>
//                         <ListGroup.Item className="border-0">FREE HD artwork</ListGroup.Item>
//                         <ListGroup.Item className="border-0">Prices include regular shipping, extra shipping cost varies.</ListGroup.Item>
//                     </ListGroup> */}
//                     <ListGroup>
//                         <ListGroup.Item className="border-0">
//                             <ul >
//                                 <li className="mb-2">Extra poses ($20 per pose) **NOTE: Premium purchases include 1 free additional pose**</li>
//                                 <li className="mb-2">FREE Revisions</li>
//                                 <li className="mb-2">Animated GIFS (discord sticker sizes available) **Extra $20**</li>
//                                 <li className="mb-2">FREE HD artwork</li>
//                                 <li>Prices include regular shipping, extra shipping cost varies.</li>
//                             </ul>
//                         </ListGroup.Item>
//                     </ListGroup>
//                     <p>**PLEASE be as detailed as possible as I want to meet your expectations as best as I can. I have provided 
//                         questions for this reason whilst you submit your request so please answer them as detailed as possible**</p>
//                     <p>I look forward to working with you!</p>
//                     <p>Sincerely, <br />Windlist</p>
//                 </Card.Text> 
//                 <hr />
//                 <Row className="g-0">
//                     <Col>
//                         <p>Main type <br /> Cartoon</p>
//                     </Col>
//                     <Col>
//                         <p>Illustration style <br /> Other</p>
//                     </Col>
//                     <Col>
//                         <p>Image file format <br /> JPG</p>
//                     </Col>
//                 </Row>
//             </Card.Body>
//         </Card>
//     )
// }