
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Declaration = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
      Swal.fire({
        title: 'Message Sent',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    }

return(
<>
<div className="container-fluid text-center">
    <div className="container">
    <button className='bg-secondary p-2 border-0 bg-gradient rounded-2 text-white' onClick={handleShow}>
        Thanks Note
      </button>
      <p className="text-black-50 pt-2 name-font1">Build with <svg className="iconclr bi bi-hearts" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"/>
      </svg> by Krishna Prasad</p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Declaration</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-algn p-3'>
        Although I’m currently looking for any new opportunities, My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </Modal.Body>
        <Modal.Footer>
        <button className='bg-success bg-gradient p-2 rounded-2 border-0 text-white' onClick={handleClick}>Connect</button>
          <button className='bg-secondary bg-gradient p-2 rounded-2 border-0 text-white' onClick={handleClose}>
            Close
          </button>
          
        </Modal.Footer>
      </Modal>


    </div>
</div>
</>
)
}

export default Declaration;