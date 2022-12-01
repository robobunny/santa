import WishCell from 'src/components/Wish/WishCell'

type WishPageProps = {
  id: number
}

const WishPage = ({ id }: WishPageProps) => {
  return <WishCell id={id} />
}

export default WishPage
