import { Component } from "react";
import { Container } from "react-bootstrap";
// import { Image } from "react-bootstrap";
import "./About.css";
// import myPhoto from "./headshot.png";
// import coCreatorPhoto from "./headshot.png";
// import teamMemberPhoto from "./headshot.png";
import GithubAbout from "./GithubAbout";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFontAwesome,
//   faTwitter,
//   faGithub,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(faTwitter, faFontAwesome, faGithub, faLinkedin);

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userImages: [],
    };
  }
  render() {
    const users = [
      { username: "reedoooo", stats: { company: "Google", followers: 100 } },
      {
        username: "jamesCodes808",
        stats: { company: "Facebook", followers: 200 },
      },
      {
        username: "Sheldon-Pierce",
        stats: { company: "Amazon", followers: 300 },
      },
      { username: "ekalber", stats: { company: "Microsoft", followers: 400 } },
    ];
    return (
      <Container className="my-5 profile-container ">
        <h2 className="about-us-heading text-center mb-4">About Us</h2>
        {/* <Row className="justify-content-center align-items-center grow box"> */}
          {/* <Col
            xs={12}
            md={6}
            className="mb-4 justify-content-center align-items-center"
          > */}
            <div>
              <GithubAbout users={users} />
            </div>
            {/* <Image src={myPhoto} fluid className="profile-image" /> */}
          {/* </Col> */}
          {/* <Col xs={12} md={6}> */}
          {/* <h3 className="profile-name">Reed Vogt</h3> */}
          {/* <p className="profile-description">
              Hi, I'm Reed! I'm a passionate developer who loves building
              websites and applications that make people's lives easier. I also
              love books which is why I created this app!
            </p> */}
          {/* <div className="profile-social-links">
              <a href="https://twitter.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                {"Twitter"}
              </a>
              <a href="https://www.linkedin.com/in/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                {"LinkedIn"}
              </a>
              <a href="https://github.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                {"Github"}
              </a>
            </div>
            <img
              src="https://ghchart.rshah.org/HEXCOLORCODE/reedoooo"
              alt="Name Your Github chart"
            /> */}
          {/* </Col> */}
        {/* </Row> */}

        {/* <Row className="justify-content-center align-items-center grow box ">
          <Col
            xs={12}
            md={6}
            className="mb-4 order-md-2 justify-content-center align-items-center"
          >
            <Image src={coCreatorPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3 className="profile-name">James Solima</h3>
            <p className="profile-description">
              Hi, I'm also a member of the development team and I'm passionate
              about creating user-friendly and accessible applications. I have
              experience in frontend development and design, and I'm excited to
              contribute my skills to this project.
            </p>
            <div className="profile-social-links">
              <a href="https://twitter.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                {"Twitter"}
              </a>
              <a href="https://www.linkedin.com/in/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                {"LinkedIn"}
              </a>
              <a href="https://github.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                {"Github"}
              </a>
            </div>
            <img
              src="https://ghchart.rshah.org/HEXCOLORCODE/jamesCodes808"
              alt="Name Your Github chart"
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center grow box">
          <Col xs={12} md={6} className="mb-4">
            <Image src={teamMemberPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="profile-name">Sheldon Pierce</h3>
            <p className="profile-description">
              Hi, I'm a member of the development team and I'm passionate about
              creating innovative solutions using cutting-edge technologies. I'm
              excited to be a part of this project and to help make a difference
              in people's lives.
            </p>
            <div className="profile-social-links">
              <a href="https://twitter.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                {"Twitter"}
              </a>
              <a href="https://www.linkedin.com/in/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                {"LinkedIn"}
              </a>
              <a href="https://github.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                {"Github"}
              </a>
            </div>
            <img
              src="https://ghchart.rshah.org/HEXCOLORCODE/Sheldon-Pierce"
              alt="Name Your Github chart"
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center grow box">
          <Col xs={12} md={6} className="order-md-1">
            <Image src={teamMemberPhoto} fluid className="profile-image" />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="profile-name">Ethan Albers</h3>
            <p className="profile-description">
              Hi, I'm a member of the development team and I'm passionate about
              creating innovative solutions using cutting-edge technologies. I'm
              excited to be a part of this project and to help make a difference
              in people's lives.
            </p>
            <div className="profile-social-links">
              <a href="https://twitter.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                {"Twitter"}
              </a>
              <a href="https://www.linkedin.com/in/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                {"LinkedIn"}
              </a>
              <a href="https://github.com/reedvogt">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                {"Github"}
              </a>
            </div>
            <img
              src="https://ghchart.rshah.org/HEXCOLORCODE/ekalbers"
              alt="Name Your Github chart"
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center grow box">
          <Col xs={12} md={6} className="order-md-1">
            <div>
              <GithubAbout />
            </div>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Profile;


import React, { Component } from "react";
import { Octokit } from "@octokit/rest";
import "./GithubAbout.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFontAwesome,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";

library.add(faTwitter, faFontAwesome, faGithub, faLinkedin);
// access token
const octokit = new Octokit({
  auth: process.env.REACT_APP_ACCESS_TOKEN,
});

const styles = {
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  header: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subheader: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  item: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
};

class GithubAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      loading: false,
      userData: this.props.userData,
    };
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      // Retrieve user information for multiple users
      const users = ["reedoooo", "jamesCodes808", "Sheldon-Pierce", "ekalber"];

      const data = await Promise.all(
        users.map(async (user) => {
          const userResponse = await octokit.rest.users.getByUsername({
            username: user,
          });
          return userResponse.data;
        })
      );

      this.setState({ data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    // const { data, error, loading } = this.state;

    // if (loading) {
    //   return <p>Loading...</p>;
    // }

    // if (error) {
    //   return <p>{error}</p>;
    // }

    // if (!data) {
    //   return null;
    // }
    const { users, error, loading } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (!users) {
      return null;
    }

    return (
      // <div style={styles.container}>
      <div>
        {users.map((user) => (
          <div key={user.username}>
            <Row className="justify-content-center align-items-center grow box">
              <Col
                xs={12}
                md={6}
                className="mb-4 order-md-2 justify-content-center align-items-center"
              >
                <img
                  src={`https://github.com/${user.username}.png`}
                  alt={`${user.username} avatar`}
                  fluid
                  className="profile-image"
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
              </Col>
              <h2 style={styles.header}>{user.username}</h2>
              <p className="profile-description">
                Hi, I'm Reed! I'm a passionate developer who loves building
                websites and applications that make people's lives easier. I
                also love books which is why I created this app!
              </p>
              <div className="profile-social-links">
                <a href="https://twitter.com/reedvogt">
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                  {"Twitter"}
                </a>
                <a href="https://www.linkedin.com/in/reedvogt">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                  {"LinkedIn"}
                </a>
                <a href="https://github.com/reedvogt">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                  {"Github"}
                </a>
              </div>
              <img
                src={`https://ghchart.rshah.org/HEXCOLORCODE/${user.username}`}
                alt="Name Your Github chart"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Object.entries(user.stats).map(([key, value]) => (
                  <div key={key} style={{ ...styles.item }}>
                    <strong>{key}: </strong>
                    {value || "N/A"}
                  </div>
                ))}
              </div>
              {/* </Col> */}
            </Row>
          </div>
        ))}
      </div>
      // <div style={styles.container}>
      //   {data.map((user) => (
      //     <div key={user.id} style={styles.card}>
      //       <img
      //         src={user.avatar_url}
      //         alt={`${user.login} avatar`}
      //         style={{ width: "50px", height: "50px", marginRight: "10px" }}
      //       />
      //       <div>
      //         <h2 style={styles.header}>{user.name || user.login}</h2>
      //         <div style={{ display: "flex", flexDirection: "column" }}>
      //           <div style={{ ...styles.item }}>
      //             <strong>Company: </strong>
      //             {user.company || "N/A"}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Blog: </strong>
      //             {user.blog || "N/A"}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Location: </strong>
      //             {user.location || "N/A"}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Email: </strong>
      //             {user.email || "N/A"}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Bio: </strong>
      //             {user.bio || "N/A"}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Twitter: </strong>
      //             {user.twitter_username || "N/A"}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Public Repos: </strong>
      //             {user.public_repos}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Public Gists: </strong>
      //             {user.public_gists}
      //           </div>
      //           <div style={{ ...styles.item }}>
      //             <strong>Followers: </strong>
      //             {user.followers}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      // </div>
    );
  }
}
export default GithubAbout;
