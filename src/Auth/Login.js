import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated &&
    loginWithRedirect();
}

export default Login