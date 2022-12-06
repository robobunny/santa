import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const fakeWishes = [
  {
    id: 1,
    title: "A wish",
    description: "A description of the wish",
    url: "www.example.com/link-to-the-wish",
  },
  {
    id: 2,
    title: "Another wish",
    description: "Another description of the wish",
    url: "www.example.com/link-to-the-wish",
  },
];

type wishForDisplay = {
  title: string,
  description: string,
  url: string,
};

const Wish = ({ wish: wishForDisplay }) => {
};

const MyWishesPage = () => {
  return (
    <>
      <MetaTags title="MyWishes" description="MyWishes page" />

      <h1>My Wishes</h1>


    </>
  )
}

export default MyWishesPage
