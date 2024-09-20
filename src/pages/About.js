import React from 'react'
import { Container } from 'react-bootstrap'
import AboutThisGig from '../components/AboutThisGig'

export default function About(){
    return(
        // <Container className='text-center mt-5'>
        //     {/* <Card>
        //         <Card.Title>About Me</Card.Title>
        //         <Card.Body>
        //             <div className='p-5 mb-4 bg-light rounded-3'>
        //                 <h1>About Me</h1>
        //                 <h3>Hi There! My name is Windlist and I create character art in anime and cartoon styles. I look forward to
        //                 getting to work with you!</h3>
        //             </div>
        //         </Card.Body>
        //     </Card> */}
        //     <AboutThisGig />
        // </Container>

        <Container className='mt-5'>
            <AboutThisGig />
        </Container>
    )
}