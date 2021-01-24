import { useAuth0 } from "@auth0/auth0-react";

export default function MainPage() {
  const { loginWithRedirect, user, logout } = useAuth0();
  console.log(user)
  return (
    <div>
    <button onClick={() => loginWithRedirect()}>Log In</button>
      <div>
        <pre>{JSON.stringify(user, null, 4)}</pre>
        <button onClick={ ()=> logout() }>LOGOUT</button>
      </div>
    </div>
  )
}
