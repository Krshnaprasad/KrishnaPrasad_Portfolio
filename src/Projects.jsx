import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Encore from './assets/Encore.png'
import Econnect from './assets/Econnect.png'

const Projects = () => {

    return (
        <>
            <div className="container" id="project">
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
                                    <p>Name: ENCORE</p>
                                    <p>URL: Encore</p>
                                    <p>APP: Encore Telecaller, Inventory</p>
                                    <p>Environment: Vue.js, Quasar, SpringBoot, PostgreSQL</p>
                                    <p>Domain: Telecalling and Educational Management System</p>    
                                    <span className='fs-5 fw-bold'>Tele-calling</span><br></br><br></br>
                                       <ul>
                                        <li><span className='fw-bold'>Telecaller System:</span> Developed a Vuejs frontend for telecallers to manage customer details and follow-up on exam course promotions.</li>
                                        <li><span className='fw-bold'>Multitenancy with Spring Boot:</span> Implemented Spring Boot with PostgreSQL to ensure data security and isolation for different clients.</li>
                                        <li><span className='fw-bold'>Admin Role: </span>Introduced an admin role to manage telecaller activities, enquiries, admissions, and user creation.</li>
                                        <li><span className='fw-bold'>Lead Management:</span> Implemented manual lead creation and bulk lead upload, with features to assign telecallers for follow-ups. </li>
                                        <li><span className='fw-bold'>Super Admin:</span> Created a super admin role for team creation and management, with separate data for each team.</li>
                                        <li><span className='fw-bold'>Customer Transition:</span> Focused on transitioning customer statuses from enquiry to admission, including course purchase logic.</li>
                                        <li><span className='fw-bold'>Call Monitoring:</span> Admin panel displays telecaller call logs for monitoring, including call counts and speaking time analysis.</li>
                                        <li><span className='fw-bold'>Payment Link Management:</span> Created a system to generate payment links through Razorpay integration. When users click the link and make payments, the amount is recorded in the payment link table within the Razorpay panel.</li>
                                       </ul>
                                       <span className='fs-5 fw-bold'> Inventory</span><br></br><br></br>
                                       <ul>
                                        <li><span className='fw-bold'>Inventory System:</span> Developed a Vuejs frontend for inside staffs, workers to manage courses, books and follow-up on storage purpose.</li>
                                        <li><span className='fw-bold'>HR & Admin Role:</span> Introduced an HR role as well as  admin  to manage storage activities, inventories, and necessity needs .</li>
                                       </ul>
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
                                    <p>Name: E-CONNECT</p>
                                    <p>URL: E-Connect</p>
                                    <p>APP: E-Connect - HRM Clone</p>
                                    <p>Environment: React.js, SpringBoot, H2 Database</p>
                                  
                                    <span className='fs-3 fw-bold'> User</span> <br></br><br></br>
                                      <ul>
                                        <li>About the company, vision & mission, courses to be taken these has to be detailed.</li>
                                   
                                        <li>In these fields just see the updates about salary details, attendance and job openings.</li>
                                   
                                        <li>In these fields we can requests leave, salary advance, resignation, permission etc</li>
                                    
                                        <li>In day to day activities each month punchlists cross-check the Checkin- Checkout timings and the status.  </li>
                               
                                        <li>User side the basic details, bank details and personal details we can edit & modify.</li>
                                    </ul>
                                    <span className='fs-3 fw-bold'> Admin</span> <br></br><br></br>
                                    <ul>
                                        <li>Admin side we can addon the employee details, the basic details, bank details and personal details, Salary, Job openings, Attendances  we can edit & modify.</li>
                                    </ul>
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