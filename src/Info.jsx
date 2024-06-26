import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
const Info = () => {

    const handleClick = () => {
        Swal.fire({
          title: 'Message Sent',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      }




    return (
        <>
            <div className="container" >
                <div className="text-center fs-2 fw-bold name-font1 pb-4">Keep in<span className="fs-2 fw-bold name-font">   touch</span></div>
                <div className="row ">
                    <div className="col pt-5 d-flex justify-content-center">
                        <Form style={{ width: 350 }}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" placeholder="mail@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone:</Form.Label>
                                <Form.Control type="number" placeholder="Enter your number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className='text-center '>
                                <button className='border-0 p-1 infobg text-white rounded-2 ' style={{ width: 350 }} onClick={handleClick}>Submit</button>
                            </div>
                        </Form>
                    </div>
                    <div className="col pt-5 d-flex justify-content-center">
                        <div className="card" style={{ width: 300 }}>
                            <span><iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2294290559057!2d78.1137209739389!3d9.914840523487646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58188defae9%3A0x525fe1a5d116ddb!2sSankar%20Electronics%20Store!5e0!3m2!1sen!2sin!4v1700201098322!5m2!1sen!2sin"
                                width="300"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe></span>
                            <span className="text-center p-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>&nbsp;<span>No 5, South Masi Street,<br></br>
                                    Madurai -625001.</span></span> </div>

                    </div>
                </div>




            </div>
        </>
    )
}

export default Info;