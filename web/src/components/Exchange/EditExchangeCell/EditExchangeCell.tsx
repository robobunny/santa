import type { EditExchangeById, UpdateExchangeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExchangeForm from 'src/components/Exchange/ExchangeForm'

export const QUERY = gql`
  query EditExchangeById($id: Int!) {
    exchange: exchange(id: $id) {
      id
      createdAt
      name
      adminId
    }
  }
`
const UPDATE_EXCHANGE_MUTATION = gql`
  mutation UpdateExchangeMutation($id: Int!, $input: UpdateExchangeInput!) {
    updateExchange(id: $id, input: $input) {
      id
      createdAt
      name
      adminId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ exchange }: CellSuccessProps<EditExchangeById>) => {
  const [updateExchange, { loading, error }] = useMutation(
    UPDATE_EXCHANGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Exchange updated')
        navigate(routes.exchanges())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateExchangeInput,
    id: EditExchangeById['exchange']['id']
  ) => {
    updateExchange({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Exchange {exchange?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ExchangeForm exchange={exchange} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
