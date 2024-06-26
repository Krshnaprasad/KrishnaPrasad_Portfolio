import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'
import Image from 'react-bootstrap/Image';
import Type from './TypeAnimation.jsx'

import Resume from './assets/Krishnaprasad_FullstackDeveloper_1yrexp_Resume.pdf'
import Img1 from './assets/IMG_7610.png'
import Img2 from './assets/IMG_7622.PNG'

import Cloud from './assets/Cloud.gif'

const Homepage = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.about-content', { origin: 'bottom' });
    sr.reveal('.home-content', { origin: 'top' });

  }, []);

  return (
    <>

      <div className=" container-fluid pt-5 pb-5">
        <div className="container pt-5">
          <div className="row row-cols-lg-2">
            <div className="home-content col-lg-7 text-black order-lg-1 order-2 text-center text-lg-start">
              <div className="pt-5"><span className="name-font fs-1 fw-semibold">Krishna Prasad</span><br></br>
                <span className="fs-3 name-font1 fw-semibold">And Im a <span className="name-font"><Type /></span></span><br></br><br></br>
                <span className='text-algn'>Dedicated Software development professsional with hands-on-experience in analyzing, designing and developing a certain versatility in using technologies and programming languages. Skilled in database design and scalable solutions to meet diverse project requirements.</span></div>
            </div>
            <div className="col-lg-5 pb-5 d-flex justify-content-center order-1 order-lg-2">
              <Image className="img-alter img-fluid d-lg-block d-none" src={Img1} width="300" height="300"></Image>
              <Image className="sm-img img-fluid d-xs-block d-lg-none" src={Img1} width="300" height="300"></Image>
              <span className="social-icons text-white  ps-5 justify-content-end d-lg-block d-none">


                <a className="icon-clr pt-3" href="https://github.com/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg></a><br></br><br></br>
                <a className="icon-clr pt-3" href="https://www.linkedin.com/login"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg></a><br></br><br></br>
                <a className="icon-clr pt-3" href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&ifkv=AVQVeyymEllvvrAdYkkwmoWKZyRXzWsZa7andcrkff0N5vyR2qqOWm8DYRBK9SZATXjbCIeKKvQsgQ&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1946003911%3A1699095636903891&theme=glif"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697Zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
                </svg></a><br></br><br></br>
                <a href={Resume} download> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="icon-clr fw-bold bi bi-arrow-down-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                </svg></a>
              </span>
              <div className="border-box"></div>
              <span className="social-icons1 text-white pt-5 ps-5 d-flex justify-content-start d-lg-none d-block">

                <a className="icon-clr ms-4" href="https://github.com/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg></a><br></br><br></br>
                <a className="icon-clr ms-4" href="https://www.linkedin.com/login"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg></a><br></br><br></br>
                <a className="icon-clr ms-4" href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&ifkv=AVQVeyymEllvvrAdYkkwmoWKZyRXzWsZa7andcrkff0N5vyR2qqOWm8DYRBK9SZATXjbCIeKKvQsgQ&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1946003911%3A1699095636903891&theme=glif"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697Zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
                </svg></a>    <br></br><br></br>
                <a href={Resume} download> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="icon-clr ms-4 fw-bold bi bi-arrow-down-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                </svg></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-5" id="about">
        <div className="container">
          <div className="row row-cols-lg-2" >
            <div className="col-lg-6 pt-4 d-flex justify-content-center">
              <Image src={Img2} width="350" height="400"></Image>
              <Image className="cloud d-none d-md-block" src={Cloud} width="150" height="150" ></Image>
            </div>
            <div className="about-content col-lg-6 text-algn">
              <span className="name-font fs-2 fw-bold">About Me.</span>
              <p className="pt-2"><span className="fs-6">
                - Well-proficient in Front-end website development with <span className="fw-bold">Vue.js, Vue-Bootstrap, Quasar framework , React.js</span>  creating responsive user interfaces and enchancing user experiences.<br></br><br></br>
                - Good knowledge in developing backend appilications in Java using <span className="fw-bold">SpringBoot Framework</span>  and <span className="fw-bold">Javascript</span> using <span className="fw-bold">Express.js, Node.js</span> handling REST APIs and implements business logic.<br></br><br></br>
                - Experience in working with <span className="fw-bold">PostgreSQL and MongoDB</span> as a database for efficient in data storage and retrieval.<br></br><br></br>
                - Hands-on Experience in version control using <span className="fw-bold">Git and GitHub,</span>  managing code repositories and colloborating with other developers. <br></br><br></br>
                - Familiarity with Agile Methodology, participating in ceremonies like weekly-standups, Sprint Planning, Sprint Review and Retrospective.</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;