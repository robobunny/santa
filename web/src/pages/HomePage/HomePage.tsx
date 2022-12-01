import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Duraney Family Secret Santa</h1>
      <p>
            <Link to={routes.users()}>Users</Link>
      </p>
      <p>
            <Link to={routes.wishes()}>Wishes</Link>
      </p>
    </>
  )
}

export default HomePage
