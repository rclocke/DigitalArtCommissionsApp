import {Navbar, Nav} from 'react-bootstrap'

export default function Navigationbar(){

    return(
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand className='ps-2' href="/">Windlist Art Portfolio</Navbar.Brand>
            <Navbar.Toggle className='me-2' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto ps-2'>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/commissions">Commissions</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};