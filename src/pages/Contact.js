import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

export default function Contact() {
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

      <Container className="mt-5">
        <h2 className="text-center mb-4">Message Windlist</h2>
        <Form>
          
          {/* <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" required />
          </Form.Group> */}


          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message here" required />
          </Form.Group>

          
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
    </Container>
      );
    
};


