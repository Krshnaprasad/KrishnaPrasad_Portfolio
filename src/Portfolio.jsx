import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Imglogo from './assets/IMG_7611.png'
import Image from 'react-bootstrap/Image';
import Homepage from './Homepage.jsx';
import Experience from './Experience.jsx'
import Project from './Projects.jsx'
import Education from './Education.jsx'
import Info from './Info.jsx'  
const Portfolio = () => {

    const [show, setShow] = useState(false);



    return (
        <>
            <div className='navba'>

                <Navbar expand="lg" className="bg-body-secondary">
                    <Container>
                        <Image src={Imglogo} roundedCircle width="30" height="30" ></Image> &nbsp; &nbsp;
                        <Navbar.Brand className="name-font fs-4 fw-bold">Kr!shna Prasad</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="justify-content-center flex-grow-1">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link onClick={() => setShow(true)} >Skills</Nav.Link>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                                <Nav.Link href="#project">Projects</Nav.Link>
                                <Nav.Link href="#education">Education</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link>

                                </Nav.Link>

                            </Nav>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                </svg>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            <div className='pt-2'>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='text-center' id="example-custom-modal-styling-title">
                            <h4 className='fw-bold'>Skills</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row row-cols-2">
                            <div className="col">
                                <ul>
                                    <span className='fs-6 fw-bold'>Languages</span>
                                    <li>HTML%</li>
                                    <li>CSS3</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>Javascript</li>
                                    <li>SpringBoot</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul><span className='fs-6 fw-bold'>Frameworks</span>
                                    <li>React.JS</li>
                                    <li>Vue.JS</li>
                                    <li>Node.JS</li>
                                    <li>Express.JS</li>
                                    <li>Bootstrap Vue</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul><span className='fs-6 fw-bold'>Database</span>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                    <li>H2 Database</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul><span className='fs-6 fw-bold'>Version Control</span>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
            <div className='container-fluid pt-5 pb-5'>
                <Homepage />
            </div>
            <div className='container-fluid pb-5'>
                <Experience/>
            </div>
            <div className='container-fluid pt-5 pb-5'>
                <Project/>
            </div>
            <div className='container-fluid pt-5 pb-5'>
                <Education/>
            </div>
            <div className='container-fluid pt-5 pb-5'>
                <Info/>
            </div>
        </>
    )
}

export default Portfolio;