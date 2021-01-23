import { useAuth0 } from "@auth0/auth0-react";

export default function MainPage() {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}
