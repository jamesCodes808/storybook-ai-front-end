import { Component } from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import GithubAbout from "./GithubAbout";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userStats: {},
      error: null,
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const users = [
        { username: "reedoooo" },
        { username: "jamesCodes808" },
        { username: "Sheldon-Pierce" },
        { username: "ekalber" },
      ];
      this.setState({
        loading: true,
        users: users,
      });



      const userStats = {};

      // Loop through each user and retrieve their stats
      for (const user of users) {
        const userResponse = await fetch(
          `https://api.github.com/users/${user.username}`
        );

        if (!userResponse.ok) {
          throw new Error("Failed to retrieve user data");
        }

        const userData = await userResponse.json();
        userStats[user.username] = {
          company: userData.company,
          location: userData.location,
          bio: userData.bio,
          public_repos: userData.public_repos,
          public_gists: userData.public_gists,
          followers: userData.followers,
        };
      }

      this.setState({ userStats });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { userStats, error, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <Container className="my-5 profile-container">
        <h2 className="about-us-heading text-center mb-4">About Us</h2>
        <GithubAbout userStats={userStats} users={this.state.users} />
      </Container>
    );
  }
}

export default Profile;
