import {useAuth} from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import LoginStatus from '../LoginStatus/LoginStatus'

const Header = () => {
  let { hasRole } = useAuth();
  return (
    <div className="flex p-10 bg-slate-100 mx-auto">
      <div className="flex-around">
        <a className="no-link" href='/'>
          <h1>Secret Santa</h1>
        </a>
        <LoginStatus/>
      </div>
      {hasRole(['mom', 'admin']) &&
        <Link to={routes.admin()}>Admin Page</Link>
      }
    </div>
  )
}

export default Header
