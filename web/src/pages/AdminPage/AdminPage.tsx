import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <h1>Admin Page</h1>
      <div className="links">
        <p><Link to={routes.users()}>Users</Link></p>
        <p><Link to={routes.wishes()}>Wishes</Link></p>
      </div>
    </>
  )
}

export default AdminPage
