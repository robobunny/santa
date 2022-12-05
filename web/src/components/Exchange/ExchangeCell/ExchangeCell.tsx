import type { FindExchangeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Exchange from 'src/components/Exchange/Exchange'

export const QUERY = gql`
  query FindExchangeById($id: Int!) {
    exchange: exchange(id: $id) {
      id
      createdAt
      name
      adminId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Exchange not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ exchange }: CellSuccessProps<FindExchangeById>) => {
  return <Exchange exchange={exchange} />
}
