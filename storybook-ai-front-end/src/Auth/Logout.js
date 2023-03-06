import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {

  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  const handleLogout = () => {
    logout({returnTo: window.location.origin});
  }

  return isAuthenticated &&
    <Button onClick={handleLogout} >Log Out</Button>
}

export default Logout;