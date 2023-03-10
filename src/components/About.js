import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';
import myPhoto from './headshot.png';
import sheldon from './face.jpg';
import coCreatorPhoto from './headshot.png';
import teamMemberPhoto from './headshot.png';
import GithubAbout from './GithubAbout';
import GitApi from './GitApi';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  faFontAwesome,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  useColorModeValue,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Stack,
  HStack,
  Center,
  useDisclosure,
  SlideFade,
  Fade,
  ScaleFade,
  VStack,
  Collapse,
  Box,
} from '@chakra-ui/react';
import { FaCentercode } from 'react-icons/fa';

library.add(faTwitter, faFontAwesome, faGithub, faLinkedin);

const About = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
      className='absolute top-0 left-0 w-full h-full'
    >
      <GitApi />
    </motion.div>
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 0.5, ease: 'easeOut' }}
    //       exit={{ opacity: 0 }}
    //       className='absolute top-0 left-0 w-full h-full'
    //     >
    //       <Center>
    //         <Text fontSize='4xl'>About Us</Text>
    //       </Center>
    //       <Center>
    //         <Card
    //           direction={{ base: 'column', sm: 'row' }}
    //           overflow='hidden'
    //           variant='outline'
    //           minW={'30%'}
    //           maxW={'60%'}
    //           margin='10'
    //           paddingLeft={8}
    //         >
    //           {/* <GitApi /> */}
    //           <Image
    //             objectFit='cover'
    //             maxW={{ base: '60%', sm: '200px' }}
    //             src={sheldon}
    //             alt='Sheldon Picture'
    //           />
    //           <Stack>
    //             <CardBody>
    //               <Center>
    //                 <Heading size='md'>Reed Vogt</Heading>
    //               </Center>

    //               <Text py='2' fontSize={'20'}>
    //                 <span fontSize='40'>"</span>Hi, I'm Reed! I'm a passionate
    //                 developer who loves building websites and applications that make
    //                 people's lives easier. I also love books which is why I created
    //                 this app! "
    //               </Text>
    //               <Center>
    //                 <HStack marginBottom={'10'}>
    //                   <div className='profile-social-links'>
    //                     <a href='https://twitter.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                       {'Twitter'}
    //                     </a>
    //                     <a href='https://www.linkedin.com/in/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                       {'LinkedIn'}
    //                     </a>
    //                     <a href='https://github.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-github' />
    //                       {'Github'}
    //                     </a>
    //                   </div>
    //                 </HStack>
    //               </Center>
    //               <Center>
    //                 <Button
    //                   w='40%'
    //                   key={0}
    //                   marginBottom={15}
    //                   onClick={onToggle}
    //                   marginRight='20'
    //                 >
    //                   GitHub Stats
    //                 </Button>
    //                 <Button w='40%' marginBottom={15} onClick={onToggle}>
    //                   GitHub Info
    //                 </Button>
    //               </Center>
    //               <Collapse key={0} in={isOpen}>
    //                 <Box width='100%'>
    //                   <Image
    //                     boxSize='400px'
    //                     src='https://ghchart.rshah.org/HEXCOLORCODE/reedoooo'
    //                     alt='Name Your Github chart'
    //                   />
    //                 </Box>
    //               </Collapse>
    //             </CardBody>
    //           </Stack>
    //         </Card>
    //       </Center>
    //       <Center>
    //         <Card
    //           direction={{ base: 'column', sm: 'row' }}
    //           overflow='hidden'
    //           variant='outline'
    //           minW={'30%'}
    //           maxW={'60%'}
    //           margin='10'
    //           paddingLeft={8}
    //         >
    //           {/* <GitApi /> */}
    //           <Image
    //             objectFit='cover'
    //             maxW={{ base: '60%', sm: '200px' }}
    //             src={sheldon}
    //             alt='Sheldon Picture'
    //           />
    //           <Stack>
    //             <CardBody>
    //               <Center>
    //                 <Heading size='md'>Reed Vogt</Heading>
    //               </Center>

    //               <Text py='2' fontSize={'20'}>
    //                 <span fontSize='40'>"</span>Hi, I'm Reed! I'm a passionate
    //                 developer who loves building websites and applications that make
    //                 people's lives easier. I also love books which is why I created
    //                 this app! "
    //               </Text>
    //               <Center>
    //                 <HStack marginBottom={'10'}>
    //                   <div className='profile-social-links'>
    //                     <a href='https://twitter.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                       {'Twitter'}
    //                     </a>
    //                     <a href='https://www.linkedin.com/in/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                       {'LinkedIn'}
    //                     </a>
    //                     <a href='https://github.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-github' />
    //                       {'Github'}
    //                     </a>
    //                   </div>
    //                 </HStack>
    //               </Center>
    //               <Center>
    //                 <Button
    //                   w='40%'
    //                   marginBottom={15}
    //                   onClick={onToggle}
    //                   marginRight='20'
    //                 >
    //                   GitHub Stats
    //                 </Button>
    //                 <Button w='40%' marginBottom={15} onClick={onToggle}>
    //                   GitHub Info
    //                 </Button>
    //               </Center>
    //               <Collapse in={isOpen}>
    //                 <Box width='100%'>
    //                   <Image
    //                     boxSize='400px'
    //                     src='https://ghchart.rshah.org/HEXCOLORCODE/reedoooo'
    //                     alt='Name Your Github chart'
    //                   />
    //                 </Box>
    //               </Collapse>
    //             </CardBody>
    //           </Stack>
    //         </Card>
    //       </Center>
    //       <Center>
    //         <Card
    //           direction={{ base: 'column', sm: 'row' }}
    //           overflow='hidden'
    //           variant='outline'
    //           minW={'30%'}
    //           maxW={'60%'}
    //           margin='10'
    //           paddingLeft={8}
    //         >
    //           {/* <GitApi /> */}
    //           <Image
    //             objectFit='cover'
    //             maxW={{ base: '60%', sm: '200px' }}
    //             src={sheldon}
    //             alt='Sheldon Picture'
    //           />
    //           <Stack>
    //             <CardBody>
    //               <Center>
    //                 <Heading size='md'>Reed Vogt</Heading>
    //               </Center>

    //               <Text py='2' fontSize={'20'}>
    //                 <span fontSize='40'>"</span>Hi, I'm Reed! I'm a passionate
    //                 developer who loves building websites and applications that make
    //                 people's lives easier. I also love books which is why I created
    //                 this app! "
    //               </Text>
    //               <Center>
    //                 <HStack marginBottom={'10'}>
    //                   <div className='profile-social-links'>
    //                     <a href='https://twitter.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                       {'Twitter'}
    //                     </a>
    //                     <a href='https://www.linkedin.com/in/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                       {'LinkedIn'}
    //                     </a>
    //                     <a href='https://github.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-github' />
    //                       {'Github'}
    //                     </a>
    //                   </div>
    //                 </HStack>
    //               </Center>
    //               <Center>
    //                 <Button
    //                   w='40%'
    //                   marginBottom={15}
    //                   onClick={onToggle}
    //                   marginRight='20'
    //                 >
    //                   GitHub Stats
    //                 </Button>
    //                 <Button w='40%' marginBottom={15} onClick={onToggle}>
    //                   GitHub Info
    //                 </Button>
    //               </Center>
    //               <Collapse in={isOpen}>
    //                 <Box width='100%'>
    //                   <Image
    //                     boxSize='400px'
    //                     src='https://ghchart.rshah.org/HEXCOLORCODE/reedoooo'
    //                     alt='Name Your Github chart'
    //                   />
    //                 </Box>
    //               </Collapse>
    //             </CardBody>
    //           </Stack>
    //         </Card>
    //       </Center>
    //       <Center>
    //         <Card
    //           direction={{ base: 'column', sm: 'row' }}
    //           overflow='hidden'
    //           variant='outline'
    //           minW={'30%'}
    //           maxW={'60%'}
    //           margin='10'
    //           paddingLeft={8}
    //         >
    //           {/* <GitApi /> */}
    //           <Image
    //             objectFit='cover'
    //             maxW={{ base: '60%', sm: '200px' }}
    //             src={sheldon}
    //             alt='Sheldon Picture'
    //           />
    //           <Stack>
    //             <CardBody>
    //               <Center>
    //                 <Heading size='md'>Reed Vogt</Heading>
    //               </Center>

    //               <Text py='2' fontSize={'20'}>
    //                 <span fontSize='40'>"</span>Hi, I'm Reed! I'm a passionate
    //                 developer who loves building websites and applications that make
    //                 people's lives easier. I also love books which is why I created
    //                 this app! "
    //               </Text>
    //               <Center>
    //                 <HStack marginBottom={'10'}>
    //                   <div className='profile-social-links'>
    //                     <a href='https://twitter.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                       {'Twitter'}
    //                     </a>
    //                     <a href='https://www.linkedin.com/in/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                       {'LinkedIn'}
    //                     </a>
    //                     <a href='https://github.com/reedvogt'>
    //                       <FontAwesomeIcon icon='fa-brands fa-github' />
    //                       {'Github'}
    //                     </a>
    //                   </div>
    //                 </HStack>
    //               </Center>
    //               <Center>
    //                 <Button
    //                   w='40%'
    //                   marginBottom={15}
    //                   onClick={onToggle}
    //                   marginRight='20'
    //                 >
    //                   GitHub Stats
    //                 </Button>
    //                 <Button w='40%' marginBottom={15} onClick={onToggle}>
    //                   GitHub Info
    //                 </Button>
    //               </Center>
    //               <Collapse in={isOpen}>
    //                 <Box width='100%'>
    //                   <Image
    //                     boxSize='400px'
    //                     src='https://ghchart.rshah.org/HEXCOLORCODE/reedoooo'
    //                     alt='Name Your Github chart'
    //                   />
    //                 </Box>
    //               </Collapse>
    //             </CardBody>
    //           </Stack>
    //         </Card>
    //       </Center>

    //       <Container className='my-5 profile-container '>
    //         <h2 className='about-us-heading text-center mb-4'>About Us</h2>

    //         <Row
    //           bg={useColorModeValue('gray.100', 'gray.900')}
    //           className='justify-content-center align-items-center grow box'
    //         >
    //           <Col xs={12} md={3}>
    //             <div>
    //               <GitApi />
    //             </div>
    //           </Col>
    //           <Col
    //             xs={12}
    //             md={3}
    //             className='mb-4 justify-content-center align-items-center'
    //           >
    //             <Image src={myPhoto} fluid className='profile-image' />
    //           </Col>
    //           <Col xs={12} md={6}>
    //             <h3 className='profile-name'>Reed Vogt</h3>
    //             <p className='profile-description'>
    //               Hi, I'm Reed! I'm a passionate developer who loves building
    //               websites and applications that make people's lives easier. I also
    //               love books which is why I created this app!
    //             </p>

    //             <div className='profile-social-links'>
    //               <a href='https://twitter.com/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                 {'Twitter'}
    //               </a>
    //               <a href='https://www.linkedin.com/in/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                 {'LinkedIn'}
    //               </a>
    //               <a href='https://github.com/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-github' />
    //                 {'Github'}
    //               </a>
    //             </div>
    //             <img
    //               src='https://ghchart.rshah.org/HEXCOLORCODE/reedoooo'
    //               alt='Name Your Github chart'
    //             />
    //           </Col>
    //         </Row>

    //         <Row className='justify-content-center align-items-center grow box '>
    //           <Col xs={12} md={6} className='img-col'>
    //             <h3 className='profile-name'>James Solima</h3>
    //             <p className='profile-description'>
    //               Hi, I'm also a member of the development team and I'm passionate
    //               about creating user-friendly and accessible applications. I have
    //               experience in frontend development and design, and I'm excited to
    //               contribute my skills to this project.
    //             </p>
    //             <div className='profile-social-links'>
    //               <a href='https://twitter.com/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                 {'Twitter'}
    //               </a>
    //               <a href='https://www.linkedin.com/in/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                 {'LinkedIn'}
    //               </a>
    //               <a href='https://github.com/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-github' />
    //                 {'Github'}
    //               </a>
    //             </div>
    //             <img
    //               src='https://ghchart.rshah.org/HEXCOLORCODE/jamesCodes808'
    //               alt='Name Your Github chart'
    //             />
    //           </Col>
    //           <Col
    //             xs={12}
    //             md={3}
    //             className='mb-4 justify-content-center align-items-center'
    //           >
    //             <Image src={coCreatorPhoto} fluid className='profile-image' />
    //           </Col>
    //           <Col xs={12} md={3}>
    //             <div>
    //               <GitApi />
    //             </div>
    //           </Col>
    //         </Row>

    //         <Row className='justify-content-center align-items-center grow box'>
    //           <Col xs={12} md={3}>
    //             <div>
    //               <GitApi />
    //             </div>
    //           </Col>
    //           <Col xs={12} md={3} className='mb-4'>
    //             <Image src={sheldon} fluid className='profile-image' />
    //           </Col>
    //           <Col xs={12} md={6}>
    //             <h3 className='profile-name'>Sheldon Pierce</h3>
    //             <p className='profile-description'>
    //               Hello, Sheldon here! I am a enthusiastic, customer-obssessed
    //               software developer from Seattle. I love designing and creating
    //               websites, as well as updating old ones to meet needs. You can
    //               catch me hiking and snowboarding in my free time!
    //             </p>

    //             <div className='profile-social-links'>
    //               <a href='https://www.linkedin.com/in/sheldon-pierce/'>
    //                 <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                 {'LinkedIn'}
    //               </a>
    //               <a href='https://github.com/Sheldon-Pierce'>
    //                 <FontAwesomeIcon icon='fa-brands fa-github' />
    //                 {'Github'}
    //               </a>
    //             </div>
    //             <img
    //               src='https://ghchart.rshah.org/HEXCOLORCODE/Sheldon-Pierce'
    //               alt='Name Your Github chart'
    //             />
    //           </Col>
    //         </Row>

    //         <Row className='justify-content-center justify-content-space-around align-items-center grow box'>
    //           <Col xs={12} md={6} style={{ float: 'right' }}>
    //             <h3 className='profile-name'>Ethan Albers</h3>
    //             <p className='profile-description'>
    //               Hi, I'm a member of the development team and I'm passionate about
    //               creating innovative solutions using cutting-edge technologies. I'm
    //               excited to be a part of this project and to help make a difference
    //               in people's lives.
    //             </p>

    //             <div className='profile-social-links'>
    //               <a href='https://twitter.com/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-twitter' />
    //                 {'Twitter'}
    //               </a>
    //               <a href='https://www.linkedin.com/in/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-linkedin' />
    //                 {'LinkedIn'}
    //               </a>
    //               <a href='https://github.com/reedvogt'>
    //                 <FontAwesomeIcon icon='fa-brands fa-github' />
    //                 {'Github'}
    //               </a>
    //             </div>
    //             <img
    //               src='https://ghchart.rshah.org/HEXCOLORCODE/ekalbers'
    //               alt='Name Your Github chart'
    //             />
    //           </Col>
    //           <Col xs={12} md={3} className='img-col'>
    //             <Image src={teamMemberPhoto} fluid className='profile-image' />
    //           </Col>
    //           <Col xs={12} md={3}>
    //             <div>
    //               <GitApi />
    //             </div>
    //           </Col>
    //         </Row>

    //         <Row
    //           className='justify-content-center align-items-center grow box'
    //           style={{ right: '0' }}
    //         >
    //           <Col xs={12} md={4} className='order-md-1'>
    //             <div>
    //               <GithubAbout />
    //             </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </motion.div>
  );
};

export default About;
