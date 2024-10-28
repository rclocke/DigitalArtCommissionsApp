import React from 'react';
import { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

export default function Contact() {

  const [validated, setValidated] = useState(false);

  function handleSubmit(e){
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefualt();
      e.stopPropagation();
    }

    setValidated(true);
  }

  return (
        // <Container className="text-center mt-5">
        //   <div className="p-5 mb-4 bg-light rounded-3">
        //     <h1>Message Windlist</h1>
        //     <form className='row g-3'>
        //       <div class="form-floating">
        //         <textarea class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
        //         <label for="floatingTextarea2">Ask Windlist a question or share your project details (timeline, requirements, budget, etc.)</label>
        //       </div>
        //       <div>
        //         <Button type='submit'>Send Message</Button>
        //       </div>
        //     </form>
        //   </div>
        // </Container>

    // <Container className="mt-5">
    //   <h2 className="mb-4">Message Windlist</h2>
    //   <Form>
        
    //     <Form.Group className="mb-3" controlId="formFirstName">
    //       <Form.Label>First Name</Form.Label>
    //       <Form.Control type="text" placeholder="Enter your name" required />
    //     </Form.Group>


    //     <Form.Group className="mb-3" controlId="formEmail">
    //       <Form.Label>Email Address</Form.Label>
    //       <Form.Control type="email" placeholder="Enter your email" required />
    //     </Form.Group>

        
    //     <Form.Group className="mb-3" controlId="formSubject">
    //       <Form.Label>Subject</Form.Label>
    //       <Form.Control type="text" placeholder="Subject" required />
    //     </Form.Group>


    //     <Form.Group className="mb-3" controlId="formMessage">
    //       <Form.Label>Message</Form.Label>
    //       <Form.Control as="textarea" rows={4} placeholder="Write your message here" required />
    //     </Form.Group>

        
    //     <Button variant="primary" type="submit">
    //       Send Message
    //     </Button>
    //   </Form>
    // </Container>


    // <Container className="mt-5">
    //   <h2 className="mb-4">Contact Windlist</h2>
    //   <Form>
    //     <Row>
    //       <Col>
    //         <Form.Group className="mb-3" controlId="formFirstName">
    //           <Form.Label>First Name</Form.Label>
    //           <Form.Control type="text" placeholder="Enter your name" required />
    //         </Form.Group>
    //       </Col>
    //       <Col>
    //         <Form.Group className="mb-3" controlId="formLastName">
    //             <Form.Label>Last Name</Form.Label>
    //             <Form.Control type="text" placeholder="Enter your name" required />
    //           </Form.Group>
    //       </Col>
    //     </Row>

    //     <Row>
    //       <Col>
    //         <Form.Group className="mb-3" controlId="formEmail">
    //           <Form.Label>Email Address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter your email" required />
    //         </Form.Group>
    //       </Col>
    //       <Col>
    //         <Form.Group className="mb-3" controlId="formSubject">
    //           <Form.Label>Subject</Form.Label>
    //           <Form.Control type="text" placeholder="Subject" required />
    //         </Form.Group>
    //       </Col>
    //     </Row>
        
    //     <Form.Group className="mb-3" controlId="formMessage">
    //       <Form.Label>Message</Form.Label>
    //       <Form.Control as="textarea" rows={6} placeholder="Write your message here" required />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //       Send Message
    //     </Button>
    //   </Form>
    // </Container>


    <Container fluid className="mt-3">
      <h2 className="mb-4">Contact Windlist</h2>
      <h6 className='mb-4'>Ask Windlist a question or share your project details (requirments, timeline, budget, etc.)</h6>
      <Form validated={validated} onSubmit={handleSubmit} className='mb-4' 
        style={{
          backgroundColor: '#f8f9fa', // Light grey background
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name<span style={{ color: 'red' }}> *</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                style={{border: '1px solid #495057', borderRadius: '10px'}}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name<span style={{ color: 'red' }}> *</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                style={{border: '1px solid #495057', borderRadius: '10px'}}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address<span style={{ color: 'red' }}> *</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                style={{border: '1px solid #495057', borderRadius: '10px'}}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject<span style={{ color: 'red' }}> *</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                required
                style={{border: '1px solid #495057', borderRadius: '10px'}}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message<span style={{ color: 'red' }}> *</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Write your message here"
            required
            style={{border: '1px solid #495057', borderRadius: '10px'}}
          />
        </Form.Group>

        {/* <Button variant="primary" type="submit" className='float-end w-25'>
          Send Message
        </Button> */}
        <Row className="text-end">
          <Col>
            <Button variant="primary" type="submit" className="w-25">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>

  );
};


