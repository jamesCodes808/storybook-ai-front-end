import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  }

  return ! isAuthenticated &&
    <Button onClick={handleLogin} >Log In</Button>
}

export default Login