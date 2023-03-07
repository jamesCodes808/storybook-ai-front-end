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

const styles = {
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
};

class GithubAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      const octokit = new Octokit({
        auth: process.env.REACT_APP_ACCESS_TOKEN,
      });

      const data = await Promise.all(
        this.props.users.map(async (user) => {
          const userResponse = await octokit.rest.users.getByUsername({
            username: user.username,
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
    const { error, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (!this.props.users) {
      return null;
    }


    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.username}>
            <Row className="align-items-center grow box">
              <h2 style={styles.header}>{user.username}</h2>
              <Col
                xs={12}
                md={6}
                className="mb-4 order-md-2 justify-content-center align-items-center "
              >
                <img
                  src={`https://github.com/${user.username}.png`}
                  alt={`${user.username} avatar`}
                  className="profile-image"
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                <p className="profile-description">
                  Hi, I'm {user.username}! I'm a passionate developer who loves building
                  websites and applications that make people's lives easier. I
                  also love books which is why I created this app!
                </p>
              </Col>

              <div className="profile-social-links">
                <a href={`https://twitter.com/${user.username}`}>
                  <FontAwesomeIcon icon={faTwitter} />
                  {"Twitter"}
                </a>
                <a href={`https://www.linkedin.com/in/${user.username}`}>
                  <FontAwesomeIcon icon={faLinkedin} />
                  {"LinkedIn"}
                </a>
                <a href={`https://github.com/${user.username}`}>
                  <FontAwesomeIcon icon={faGithub} />
                  {"Github"}
                </a>
              </div>

              <img
                src={`https://ghchart.rshah.org/HEXCOLORCODE/${user}`}
                alt="Name Your Github chart"
                className="contribution-chart"
              />
            </Row>
          </div>
        ))}
      </div>
    );
  }
}

export default GithubAbout;
