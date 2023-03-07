import React, { Component } from "react";
import { Octokit } from "@octokit/rest";

// access token
const octokit = new Octokit({
  auth: process.env.REACT_APP_ACCESS_TOKEN,
});

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      loading: false,
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
    const { data, error, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (!data) {
      return null;
    }

    return (
      <div style={styles.container}>
        {data.map((user) => (
          <div key={user.id} style={styles.card}>
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <div>
              <h2 style={styles.header}>{user.name || user.login}</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ ...styles.item }}>
                  <strong>Company: </strong>
                  {user.company || "N/A"}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Blog: </strong>
                  {user.blog || "N/A"}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Location: </strong>
                  {user.location || "N/A"}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Email: </strong>
                  {user.email || "N/A"}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Bio: </strong>
                  {user.bio || "N/A"}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Twitter: </strong>
                  {user.twitter_username || "N/A"}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Public Repos: </strong>
                  {user.public_repos}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Public Gists: </strong>
                  {user.public_gists}
                </div>
                <div style={{ ...styles.item }}>
                  <strong>Followers: </strong>
                  {user.followers}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default GithubAbout;
