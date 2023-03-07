import React from "react";
import Card from "react-bootstrap/Card";
import Login from "./Auth/Login";
import Logo from "../assets/logo.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f2f2f2",
        }}
      >
        <Card style={{ width: "25%", height: "35%" }}>
          <Card.Header style={{ textAlign: "center", backgroundColor: "#fff" }}>
            <img src={Logo} alt="Logo" style={{ height: "50px" }} />
          </Card.Header>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              Sign In
            </h2>
            <Login />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
