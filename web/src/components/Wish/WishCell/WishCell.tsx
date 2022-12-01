import type { FindWishById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Wish from 'src/components/Wish/Wish'

export const QUERY = gql`
  query FindWishById($id: Int!) {
    wish: wish(id: $id) {
      id
      userId
      name
      description
      price
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Wish not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ wish }: CellSuccessProps<FindWishById>) => {
  return <Wish wish={wish} />
}
