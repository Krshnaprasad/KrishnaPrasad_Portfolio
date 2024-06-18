import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Encore from './assets/Encore.png'
import Econnect from './assets/Econnect.png'

const Projects = () => {

    return (
        <>
            <div className="container">
            <div className="text-center fs-2 fw-bold name-font pt-3 pb-4">Projects</div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>Encore - Telecalling, Inventory</span></Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex justify-content-center'>
                            <Card  style={{ width: '60rem' }}>
                                <Card.Img className='' variant="top" src={Encore} />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the cards content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion><br></br>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>E-connect - HRM clone</span></Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex justify-content-center'>
                            <Card  style={{ width: '60rem' }}>
                                <Card.Img className='' variant="top" src={Econnect} />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the cards content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>


        </>
    )
}

export default Projects;