import type { FindExchanges } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Exchanges from 'src/components/Exchange/Exchanges'

export const QUERY = gql`
  query FindExchanges {
    exchanges {
      id
      createdAt
      name
      adminId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No exchanges yet. '}
      <Link
        to={routes.newExchange()}
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

export const Success = ({ exchanges }: CellSuccessProps<FindExchanges>) => {
  return <Exchanges exchanges={exchanges} />
}
