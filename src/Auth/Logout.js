import { useAuth0 } from '@auth0/auth0-react';

function Logout() {

  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: process.env.REACT_APP_AUTH_REDIRECT_URI });
  }

  return isAuthenticated &&
    handleLogout()
}

export default Logout;