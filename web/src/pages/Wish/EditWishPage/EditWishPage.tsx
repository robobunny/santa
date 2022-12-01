import EditWishCell from 'src/components/Wish/EditWishCell'

type WishPageProps = {
  id: number
}

const EditWishPage = ({ id }: WishPageProps) => {
  return <EditWishCell id={id} />
}

export default EditWishPage
