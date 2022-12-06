import {useAuth} from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  let { currentUser, hasRole } = useAuth();
  return (
    <div className="p-4 bg-primary-dark rounded-xl shadow-xl mx-auto mt-0 mb-8">
      <div className="flex flex-row justify-between">
        <a className="flex no-link" href='/'>
          <h2 className="leading-none m-0 p-0 text-3xl">Secret Santa</h2>
        </a>
        {hasRole(['mom', 'admin']) &&
          <Link to={routes.admin()}>Admin Page</Link>
        }
      </div>
      {currentUser &&
        <div className="mt-4"> 
          <p>
            Welcome, {currentUser.name}!
          </p>
        </div>
      }
    </div>
  )
}

export default Header
