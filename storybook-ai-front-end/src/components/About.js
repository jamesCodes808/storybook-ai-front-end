import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myPhoto from "./headshot.png";
import coCreatorPhoto from "./headshot.png";
import teamMemberPhoto from "./headshot.png";
import './About.css';

class Profile extends Component {
  render() {
    return (
      <Container className="my-5 profile-container">
<h2 className="about-us-heading text-center mb-4">About Us</h2>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="mb-4">
            <Image src={myPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="profile-name">Reed Vogt</h3>
            <p className="profile-description">
              Hi, I'm Reed! I'm a passionate developer who loves building
              websites and applications that make people's lives easier. I also
              love books which is why I created this app!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="mb-4 order-md-2">
            <Image src={coCreatorPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3 className="profile-name">Team Member 2</h3>
            <p className="profile-description">
              Hi, I'm also a member of the development team and I'm passionate
              about creating user-friendly and accessible applications. I have
              experience in frontend development and design, and I'm excited to
              contribute my skills to this project.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="mb-4">
            <Image src={teamMemberPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="profile-name">Team Member 3</h3>
            <p className="profile-description">
              Hi, I'm a member of the development team and I'm passionate about
              creating innovative solutions using cutting-edge technologies. I'm
              excited to be a part of this project and to help make a difference
              in people's lives.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="mb-4 order-md-2">
            <Image src={teamMemberPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3 className="profile-name">Team Member 4</h3>
            <p className="profile-description">
              Hi, I'm also a member of the development team and I'm passionate
              about creating user-friendly and accessible applications. I have
              experience in frontend development and design, and I'm excited to
              contribute my skills to this project.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
