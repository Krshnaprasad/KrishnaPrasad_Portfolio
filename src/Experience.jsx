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


return(
<>
<div className="container-fluid " id='experience'>
<div className='name-font container  text-center '>
<div className="text-center fs-2 fw-bold name-font1">Area of <span className="fs-2 fw-bold name-font">Expertise</span></div>
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
        <Button variant="secondary">Tap more</Button>
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
        <Button variant="success">Tap more</Button>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
      </Modal>
   </div>



</div>
</div>

</>
)    
}

export default Experience;