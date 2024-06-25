import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card1 from './assets/Card 1.jpeg'
import Card2 from './assets/Card 2.jpg'
import Card3 from './assets/Card 3.JPG'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Experience = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <>
            <div className="container-fluid " >
                <div className='name-font container  text-center '>
                    <div className="text-center fs-2 fw-bold name-font1 pb-4">Area of <span className="fs-2 fw-bold name-font">Expertise</span></div>
                    <div className='justify-content-evenly d-md-flex d-grid'>
                        <Card className='m-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Card1} />
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold name-font'>Full Stack Developer</Card.Title>
                                <Card.Text>
                                    ExamsDaily PVT LTD <br></br> AUG 2023 - Present
                                </Card.Text>
                                <Button variant="danger" onClick={handleShow}>Tap more</Button>
                            </Card.Body>
                        </Card>
                        <Card className='m-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Card2} />
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold name-font'>Retail Representative </Card.Title>
                                <Card.Text>
                                    Bluestone PVT LTD<br></br>
                                    SEP 2022 to AUG 2023
                                </Card.Text>
                                <Button variant="secondary"  onClick={handleShow1}>Tap more</Button>
                            </Card.Body>
                        </Card>
                        <Card className='m-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Card3} />
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold name-font'>Facility Manager</Card.Title>
                                <Card.Text>
                                    S24*7 Facility Services PVT LTD <br></br>
                                    AUG 2021 to SEP 2022
                                </Card.Text>
                                <Button variant="success"  onClick={handleShow2}>Tap more</Button>
                            </Card.Body>
                        </Card>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Roles & Responsibilities</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul className='text-algn'>
                                <li>Well-proficient in Front-end website development with Vue.js, Vue-Bootstrap, Quasar framework , React.js creating responsive user interfaces and enchancing user experiences. </li>
                                <li>Good knowledge in developing backend appilications in Java using SpringBoot Framework and Javascript using Express.js, Node.js handling REST APIs and implements business logic.</li>
                                <li>Experience in working with PostgreSQL and MongoDB as a database for efficient in data storage and retrieval.</li>
                                <li>Hands-on Experience in version control using Git and GitHub, managing code repositories and colloborating with other developers. </li>
                                <li>Familiarity with Agile Methodology, participating in ceremonies like weekly-standups, Sprint Planning, Sprint Review and Retrospective.</li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            show={show1}
                            onHide={handleClose1}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Roles & Responsibilities</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul className='text-algn'>
                                <li>Manage the sales, operations, marketing & administration of the Showroom. </li>
                                <li>Executive to greeting customers and fulfill their needs at their satisfaction.</li>
                                <li>Involve in counter sales to understand sales,product, customer purchase behavior, market trends.</li>
                                <li>Marketing team advisor to advertise, promote,doing activities to increase the customers. </li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            show={show2}
                            onHide={handleClose2}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Roles & Responsibilities</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul className='text-algn'>
                                <li>Assign and schedule work tasks with other facility technicians.</li>
                                <li>To evaluate all work requests both scheduled and unscheduled as well as any special projects that arise including Soft services.</li>
                                <li>Preparing Reports, Costs & Quotations, Documentation, Invoices, Ticket Raising, Checklist.</li>
                                <li>Perform as a Team Coordinator, Team lead, Supervising. </li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Experience;