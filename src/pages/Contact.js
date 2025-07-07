import React from 'react';
//import { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

export default function Contact() {

  //const [validated, setValidated] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:8080/contact')  // Explicitly add the backend URL for testing
  //     .then(response => response.text())
  //     .then(data => console.log(data)) // Should log "Connected to React"
  //     .catch(error => console.error('Error:', error));
  // }, []);

  async function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.firstName.value);
    console.log(form.elements.lastName.value);
    console.log(form.elements.subject.value);
    console.log(form.elements.email.value);
    console.log(form.elements.message.value);

    if(form.checkValidity() === false){
      e.stopPropagation();
    }
    else{
      const emailData = {
        from: form.elements.email.value,
        to: 'ryanlocke0617@gmail.com',   //this will need to be changed to victorias email
        subject: form.elements.subject.value,
        text: form.elements.message.value,
        replyTo: form.elements.email.value
      }

      try{
        const response = await fetch('http://localhost:8080/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if(response.ok){
          console.log('email send Successfully');
        }
        else{
          console.log('error sending email');
        }
      }catch(error){
        console.log(error);
      }
    }

    //setValidated(true);
  };

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
      <Form onSubmit={handleSubmit} className='mb-4' 
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
                name='firstName'
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
                name='lastName'
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
                name='email'
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
                name='subject'
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
            name='message'
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


