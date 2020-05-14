import React from "react";
import {Container, Col, Row} from "react-bootstrap";

import "../Shared/customCSS/custom.css";


const AboutLaith = () => {
    return (
        <Container fluid>
            <Row>
                <Col md>
                    <Col>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFJFXRIOLU-0w/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=GABNECZSCXFaiqn9QDII6MoN3YeXN5P4cbp9ixGwXcw" className="avatar" alt="Laith"/>
                    </Col>
                    <Col md>
                        <Col md>
                            <p>
                                Hello, I'm Laith. A passionate Computer Science and Mathematics student pursuing his undergraduate at Wilfrid Laurier University. 
                                                And yes, I do strongly believe pineapples belong on pizza. 
                                                I am a very focused individual, who's curiousity leads to opportunities to learn and grow.
                            </p>
                            <p>
                                During school I enjoy working on computer science and mathematic problems as it has become a daily routine for myself. 
                                                Both, computer science and mathematics are fields with endless possibilites of innovation and growth which is the driving factor for myself to keep getting better in each. 
                                                Outside of academics, I am committed to the active lifestyle of playing sports and working out. I have not gotten the 'eating healthy' part down just yet. 
                                                I spent most of life pursuing football (soccer). Playing in places like USA and France and on levels such as semi-pro and provincial. 
                                                I was even honoured enough to have led the Ontario provincial team to a GOLD MEDAL in the 2017 Canada Games in Winnipeg.
                            </p>
                            <p>
                                Even though I spend 90% of my time either studying or working on a project, I enjoy the many things life has to offer. 
                                                My favourite hobbies are being outdoors/working out, movies, and FOOD. I would sit and watch any movie from beginning to end (yes, with subtitles), without getting distracted.
                                                With food, I experiment with different recipies and love trying new dishes.
                            </p>
                            <p>
                                You can check out some of my cooking and workout videos on my  
                                <a href="https://www.instagram.com/captainlaith/?hl=en" target="blank"> instagram.</a>
                            </p>
                            <p>
                                I am always open to meeting new people, so don't hesitate to reach out!
                            </p>
                            <p>-  Laith</p>
                        </Col>
                    </Col>

                </Col>>
            </Row>
        </Container>
    );
};


export default AboutLaith;
