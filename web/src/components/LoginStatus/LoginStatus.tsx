import { useAuth } from "@redwoodjs/auth"
import {Link, routes} from "@redwoodjs/router"

const LoginStatus = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div>
      {isAuthenticated
        ? <div>
          <p>Hi, {currentUser?.name}!</p>
          <button type="button" onClick={logOut}>Log out</button>
        </div>
        : <ul>
          <li><Link to={routes.login()}>Login</Link></li>
          <li><Link to={routes.signup()}>Sign Up</Link></li>
        </ul>
      }
    </div>
  )
}

export default LoginStatus
