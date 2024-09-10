import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <Container className="text-center mt-5">
          <div className="p-5 mb-4 bg-light rounded-3">
            <h1>Welcome to Windlist's Art Portfolio</h1>
            <p className="lead">Explore my art, commissions, and more!</p>
            <Button href="/portfolio" variant="primary">
              View Portfolio
            </Button>
          </div>
        </Container>
      );
    
};


