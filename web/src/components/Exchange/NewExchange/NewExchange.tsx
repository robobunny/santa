import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExchangeForm from 'src/components/Exchange/ExchangeForm'

import type { CreateExchangeInput } from 'types/graphql'

const CREATE_EXCHANGE_MUTATION = gql`
  mutation CreateExchangeMutation($input: CreateExchangeInput!) {
    createExchange(input: $input) {
      id
    }
  }
`

const NewExchange = () => {
  const [createExchange, { loading, error }] = useMutation(
    CREATE_EXCHANGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Exchange created')
        navigate(routes.exchanges())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateExchangeInput) => {
    createExchange({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Exchange</h2>
      </header>
      <div className="rw-segment-main">
        <ExchangeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExchange
