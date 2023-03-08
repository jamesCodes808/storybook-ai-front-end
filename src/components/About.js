import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './About.css';
import sheldon from './face.jpg'
import myPhoto from './headshot.png';
// import coCreatorPhoto from './headshot.png';
import teamMemberPhoto from './headshot.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import FaCentercode from 'react-icons/fa';
import { motion } from 'framer-motion';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFontAwesome, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// library.add( faTwitter, faFontAwesome, faGithub, faLinkedin )

class About extends Component {
  render() {
    return (
      <motion.div initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.75, ease: 'easeIn' }} exit={{ opacity: 0 }}>
        <Container className='my-5 profile-container'>
          <h2 className='about-us-heading text-center mb-4'>About Us</h2>
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} md={6} className='mb-4'>
              <Image src={myPhoto} fluid className='profile-image' />
            </Col>
            <Col xs={12} md={6}>
              <h3 className='profile-name'>Reed Vogt</h3>
              <p className='profile-description'>
                Hi, I'm Reed! I'm a passionate developer who loves building
                websites and applications that make people's lives easier. I
                also love books which is why I created this app!
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
              <h3 className='profile-name'>Team Member 2</h3>
              <p className='profile-description'>
                Hi, I'm also a member of the development team and I'm passionate
                about creating user-friendly and accessible applications. I have
                experience in frontend development and design, and I'm excited
                to contribute my skills to this project.
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
              <h3 className='profile-name'>Team Member 3</h3>
              <p className='profile-description'>
                Hi, I'm a member of the development team and I'm passionate
                about creating innovative solutions using cutting-edge
                technologies. I'm excited to be a part of this project and to
                help make a difference in people's lives.
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
                Hi, I'm a member of the development team and I'm passionate
                about creating innovative solutions using cutting-edge
                technologies. I'm excited to be a part of this project and to
                help make a difference in people's lives.
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
      </motion.div>
    );
  }
}

export default About;
