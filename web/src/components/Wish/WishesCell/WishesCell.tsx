import type { FindWishes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Wishes from 'src/components/Wish/Wishes'

export const QUERY = gql`
  query FindWishes {
    wishes {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No wishes yet. '}
      <Link
        to={routes.newWish()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ wishes }: CellSuccessProps<FindWishes>) => {
  return <Wishes wishes={wishes} />
}
