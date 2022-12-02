import {useAuth} from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import LoginStatus from '../LoginStatus/LoginStatus'

const Header = () => {
  let { hasRole } = useAuth();
  return (
    <div>
      <div className="flex-between">
        <h1>Secret Santa</h1>
        <LoginStatus/>
      </div>
      {hasRole(['mom', 'admin']) &&
        <Link to={routes.admin()}>Admin Page</Link>
      }
    </div>
  )
}

export default Header
