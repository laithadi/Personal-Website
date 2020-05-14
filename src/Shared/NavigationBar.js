import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import ParticlesBg from 'particles-bg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Shared/customCSS/custom.css';

const NavigationBar = () => {
    return (
        <Container fluid> 
            <Navbar expand="lg" sticky="top" class="navbar-expand-sm">
                <ParticlesBg type="cobweb"
                    bg={true}
                    num={
                        [15, 20]
                    }/>
                <Navbar.Brand href="/">Laith Adi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/AboutLaith">About Laith</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Resume">Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );;
}


export default NavigationBar;
