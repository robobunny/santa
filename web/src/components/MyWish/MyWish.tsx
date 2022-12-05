import { Wish } from "types/graphql"

type Props = {
  wish: Wish
};

const MyWish = ({ wish }: Props) => {
  return (
    <li>
      {wish.title && <h3>{wish.title}</h3>}
      {wish.url && <a href={wish.url}>{wish.url}</a>}
      {wish.description && <p>{wish.description}</p>}
    </li>
  )
}

export default MyWish
