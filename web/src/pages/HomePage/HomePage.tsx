import {navigate, routes} from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Duraney Family Secret Santa Game" />
      <button onClick={()=>navigate(routes.myWishes())}>My Wishes</button>
    </>
  )
}

export default HomePage
