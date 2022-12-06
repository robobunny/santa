import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />
      <h1>Admin Page</h1>
      <div className="links">
      </div>
    </>
  )
}

export default AdminPage
