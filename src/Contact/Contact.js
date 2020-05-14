import React from "react";

import './Contact.css';
import {Container, ListGroup} from "react-bootstrap";


const Contact = () => {
    return <Container fluid>
        <div class="row">
            <div class="col">
                <ListGroup flush>
                    <ListGroup.Item>Email: 
                        <a href="mailto:laith_adi@hotmail.com"> Laith_adi@hotmail.com</a>
                    </ListGroup.Item>
                    <ListGroup.Item>Laurier Email: 
                        <a href="mailto:adix5190@mylaurier.ca"> Adix5190@mylaurier.ca</a>
                    </ListGroup.Item>
                    <ListGroup.Item>LinkedIn:
                        <a href="https://www.linkedin.com/in/laithadi/" target="blank"> Laith Adi</a>
                    </ListGroup.Item>
                    <ListGroup.Item>GitHub:
                        <a href="https://github.com/laithadi" target="blank"> laithadi</a>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    </Container>
};


export default Contact;
