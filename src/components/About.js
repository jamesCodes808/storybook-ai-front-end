import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import GitApi from './GitApi';
import './About.css';

import sheldon from './face.jpg';
import myPhoto from './headshot.png';
// import coCreatorPhoto from './headshot.png';
import teamMemberPhoto from './headshot.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// import FaCentercode from 'react-icons/fa';

import { motion, useIsPresent,useScroll, useSpring } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFontAwesome, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// library.add( faTwitter, faFontAwesome, faGithub, faLinkedin )

export function About() {

  return (
      <Container className='my-5 profile-container'>
        <h2 className='about-us-heading text-center mb-4'>About Us</h2>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6} className='mb-4'>
            {/* <GitApi /> */}
            <Image src={myPhoto} fluid className='profile-image' />
          </Col>
          <Col xs={12} md={6}>
            <h3 className='profile-name'>Reed Vogt</h3>
            <p className='profile-description'>
              Hi, I'm Reed! I'm a passionate developer who loves building
              websites and applications that make people's lives easier. I also
              love books which is why I created this app!
            </p>
            <div className='profile-social-links'>
              <a href='https://twitter.com/reedvogt'>
                <FaTwitter icon='fa-brands fa-twitter' />
                {'Twitter'}
              </a>
              <a href='https://www.linkedin.com/in/reedvogt'>
                <FaLinkedin icon='fa-brands fa-linkedin' />
                {'LinkedIn'}
              </a>
              <a href='https://github.com/reedvogt'>
                <FaGithub icon='fa-brands fa-github' />
                {'Github'}
              </a>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6} className='mb-4 order-md-2'>
            <Image src={sheldon} fluid className='profile-image' />
          </Col>
          <Col xs={12} md={6} className='order-md-1'>
            <h3 className='profile-name'>Sheldon Pierce</h3>
            <p className='profile-description'>
              Hello, Sheldon here! I am a forward thinking, customer focused
              developer based in Seattle, WA. I love making functional apps that
              can be used by everyone. You can catch me snowboarding or hiking
              in my free time!
            </p>
            <div className='profile-social-links'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/sheldon-pierce/'
                rel='noreferrer'
              >
                <FaLinkedin icon='fa-brands fa-linkedin' />
                {'LinkedIn'}
              </a>
              <a
                target='_blank'
                href='https://github.com/Sheldon-Pierce'
                rel='noreferrer'
              >
                <FaGithub icon='fa-brands fa-github' />
                {'Github'}
              </a>
            </div>{' '}
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6} className='mb-4'>
            <Image src={teamMemberPhoto} fluid className='profile-image' />
          </Col>
          <Col xs={12} md={6}>
            <h3 className='profile-name'>Team Member 3</h3>
            <p className='profile-description'>
              Hi, I'm a member of the development team and I'm passionate about
              creating innovative solutions using cutting-edge technologies. I'm
              excited to be a part of this project and to help make a difference
              in people's lives.
            </p>
            <div className='profile-social-links'>
              <a href='https://twitter.com/reedvogt'>
                <FaTwitter icon='fa-brands fa-twitter' />
                {'Twitter'}
              </a>
              <a href='https://www.linkedin.com/in/reedvogt'>
                <FaLinkedin icon='fa-brands fa-linkedin' />
                {'LinkedIn'}
              </a>
              <a href='https://github.com/reedvogt'>
                <FaGithub icon='fa-brands fa-github' />
                {'Github'}
              </a>
            </div>{' '}
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6} className='mb-4'>
            <Image src={teamMemberPhoto} fluid className='profile-image' />
          </Col>
          <Col xs={12} md={6}>
            <h3 className='profile-name'>Team Member 4</h3>
            <p className='profile-description'>
              Hi, I'm a member of the development team and I'm passionate about
              creating innovative solutions using cutting-edge technologies. I'm
              excited to be a part of this project and to help make a difference
              in people's lives.
            </p>
            <div className='profile-social-links'>
              <a href='https://twitter.com/reedvogt'>
                <FaTwitter icon='fa-brands fa-twitter' />
                {'Twitter'}
              </a>
              <a href='https://www.linkedin.com/in/reedvogt'>
                <FaLinkedin icon='fa-brands fa-linkedin' />
                {'LinkedIn'}
              </a>
              <a href='https://github.com/reedvogt'>
                <FaGithub icon='fa-brands fa-github' />
                {'Github'}
              </a>
            </div>{' '}
          </Col>
        </Row>
      </Container>
  );
}

export default About;

// class About extends Component {
//   render() {
//     return (
//       <Container className="my-5 profile-container ">
//         <h2 className="about-us-heading text-center mb-4">About Us</h2>

//         <Row className="justify-content-center align-items-center grow box">
//           <Col xs={12} md={3}>
//             <div>
//               {/* <GitApi /> */}
//             </div>
//           </Col>
//           <Col
//             xs={12}
//             md={3}
//             className="mb-4 justify-content-center align-items-center"
//           >
//             <Image src={myPhoto} fluid className="profile-image" />
//           </Col>
//           <Col xs={12} md={6}>
//             <h3 className="profile-name">Reed Vogt</h3>
//             <p className="profile-description">
//               Hi, I'm Reed! I'm a passionate developer who loves building
//               websites and applications that make people's lives easier. I also
//               love books which is why I created this app!
//             </p>
//             <div className="profile-social-links">
//               <a href="https://twitter.com/reedvogt">
//               <FaTwitter icon='fa-brands fa-twitter' />
//                 {"Twitter"}
//               </a>
//               <a href="https://www.linkedin.com/in/reedvogt">
//               <FaLinkedin icon='fa-brands fa-linkedin' />
//                 {"LinkedIn"}
//               </a>
//               <a href="https://github.com/reedvogt">
//               <FaGithub icon='fa-brands fa-github' />
//                 {"Github"}
//               </a>
//             </div>
//             <img
//               src="https://ghchart.rshah.org/HEXCOLORCODE/reedoooo"
//               alt="Name Your Github chart"
//             />
//           </Col>
//         </Row>

//         <Row className="justify-content-center align-items-center grow box ">
//           <Col xs={12} md={6} className="img-col">
//             <h3 className="profile-name">James Solima</h3>
//             <p className="profile-description">
//               Hi, I'm also a member of the development team and I'm passionate
//               about creating user-friendly and accessible applications. I have
//               experience in frontend development and design, and I'm excited to
//               contribute my skills to this project.
//             </p>
//             <div className="profile-social-links">
//               <a href="https://twitter.com/reedvogt">
//               <FaTwitter icon='fa-brands fa-twitter' />
//                 {"Twitter"}
//               </a>
//               <a href="https://www.linkedin.com/in/reedvogt">
//               <FaLinkedin icon='fa-brands fa-linkedin' />
//                 {"LinkedIn"}
//               </a>
//               <a href="https://github.com/reedvogt">
//               <FaGithub icon='fa-brands fa-github' />
//                 {"Github"}
//               </a>
//             </div>
//             <img
//               src="https://ghchart.rshah.org/HEXCOLORCODE/jamesCodes808"
//               alt="Name Your Github chart"
//             />
//           </Col>
//           <Col
//             xs={12}
//             md={3}
//             className="mb-4 justify-content-center align-items-center"
//           >
//             <Image src={sheldon} fluid className="profile-image" />
//           </Col>
//           <Col xs={12} md={3}>
//             <div>
//               {/* <GitApi /> */}
//             </div>
//           </Col>
//         </Row>

//         <Row className="justify-content-center align-items-center grow box">
//           <Col xs={12} md={3}>
//             <div>
//               {/* <GitApi /> */}
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <Image src={teamMemberPhoto} fluid className="profile-image" />
//           </Col>
//           <Col xs={12} md={6}>
//             <h3 className="profile-name">Sheldon Pierce</h3>
//             <p className="profile-description">
//               Hi, I'm a member of the development team and I'm passionate about
//               creating innovative solutions using cutting-edge technologies. I'm
//               excited to be a part of this project and to help make a difference
//               in people's lives.
//             </p>
//             <div className="profile-social-links">
//               <a href="https://twitter.com/reedvogt">
//               <FaTwitter icon='fa-brands fa-twitter' />
//                 {"Twitter"}
//               </a>
//               <a href="https://www.linkedin.com/in/reedvogt">
//               <FaLinkedin icon='fa-brands fa-linkedin' />
//                 {"LinkedIn"}
//               </a>
//               <a href="https://github.com/reedvogt">
//               <FaGithub icon='fa-brands fa-github' />
//                 {"Github"}
//               </a>
//             </div>
//             <img
//               src="https://ghchart.rshah.org/HEXCOLORCODE/Sheldon-Pierce"
//               alt="Name Your Github chart"
//             />
//           </Col>
//         </Row>

//         <Row className="justify-content-center justify-content-space-around align-items-center grow box">
//           <Col xs={12} md={6} style={{ float: "right" }}>
//             <h3 className="profile-name">Ethan Albers</h3>
//             <p className="profile-description">
//               Hi, I'm a member of the development team and I'm passionate about
//               creating innovative solutions using cutting-edge technologies. I'm
//               excited to be a part of this project and to help make a difference
//               in people's lives.
//             </p>
//             <div className="profile-social-links">
//               <a href="https://twitter.com/reedvogt">
//               <FaTwitter icon='fa-brands fa-twitter' />
//                 {"Twitter"}
//               </a>
//               <a href="https://www.linkedin.com/in/reedvogt">
//               <FaLinkedin icon='fa-brands fa-linkedin' />
//                 {"LinkedIn"}
//               </a>
//               <a href="https://github.com/reedvogt">
//               <FaGithub icon='fa-brands fa-github' />
//                 {"Github"}
//               </a>
//             </div>
//             <img
//               src="https://ghchart.rshah.org/HEXCOLORCODE/ekalbers"
//               alt="Name Your Github chart"
//             />
//           </Col>
//           <Col xs={12} md={3} className="img-col">
//             <Image src={teamMemberPhoto} fluid className="profile-image" />
//           </Col>
//           <Col xs={12} md={3}>
//             <div>
//               {/* <GitApi /> */}
//             </div>
//           </Col>
//         </Row>

//         <Row
//           className="justify-content-center align-items-center grow box"
//           style={{ right: "0" }}
//         >
//           <Col xs={12} md={4} className="order-md-1">
//             <div>
//               {/* <GithubAbout /> */}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
// export default About;
