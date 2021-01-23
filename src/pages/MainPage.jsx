import { useAuth0 } from "@auth0/auth0-react";

export default function MainPage() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      { !!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
      {isAuthenticated ?? 
      <div>
        <pre>{JSON.stringify(user, null, 4)}</pre>
        <button onClick={ ()=> logout() }>LOGOUT</button>
      </div>}

    </div>
  )
}
