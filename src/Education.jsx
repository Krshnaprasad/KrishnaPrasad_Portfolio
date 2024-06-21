import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Toast from 'react-bootstrap/Toast';

const Education = () => {

    return (
        <>
            <div className="container" id="education">
                <div className="text-center fs-2 fw-bold name-font1 pb-4">Acadamic-<span className="fs-2 fw-bold name-font">Background</span></div>

                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" title="Vocational Course">
                        <div className='d-flex justify-content-md-start justify-content-center'>
                            <Toast>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded" alt="" />
                                   
                                    <small className="me-auto">Vocational Course</small>
                                </Toast.Header>
                                <Toast.Body className='text-center'>
                                <strong >FullStack Development Programme</strong><br></br>
                                   <strong>EdexTech IT solutions pvt ltd.</strong><br></br>
                                    <span>AUG 2023 - APR 2024</span>
                                </Toast.Body>
                            </Toast>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Post Graduation">
                        <div className='d-flex justify-content-center'>
                        <Toast>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded" alt="" />
                                   
                                    <small className="me-auto">Post Graduation</small>
                                </Toast.Header>
                                <Toast.Body className='text-center'>
                                <strong >PGD in Facilities and Contract Management</strong><br></br>
                                   <strong>Indian Institute of Infrastructure and Construction.</strong><br></br>
                                    <span>JUL 2019 - FEB 2021</span>
                                </Toast.Body>
                            </Toast>
                        </div>  
                    </Tab>
                    <Tab eventKey="longer-tab" title="Under Graduation">
                    <div className='d-flex justify-content-md-end justify-content-center'>
                        <Toast>
                                <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded" alt="" />
                                   
                                    <small className="me-auto">Under Graduation</small>
                                </Toast.Header>
                                <Toast.Body className='text-center'>
                                <strong >B.E in Mechanical Engineering</strong><br></br>
                                   <strong>Vaigai college of Engineering.</strong><br></br>
                                    <span>AUG 2014 - FEB 2018</span>
                                </Toast.Body>
                            </Toast>
                        </div>  
                    </Tab>
                </Tabs>




            </div>
        </>
    )
}

export default Education;