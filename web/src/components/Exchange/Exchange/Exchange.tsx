
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteExchangeMutationVariables, FindExchangeById } from 'types/graphql'

const DELETE_EXCHANGE_MUTATION = gql`
  mutation DeleteExchangeMutation($id: Int!) {
    deleteExchange(id: $id) {
      id
    }
  }
`

interface Props {
  exchange: NonNullable<FindExchangeById['exchange']>
}

const Exchange = ({ exchange }: Props) => {
  const [deleteExchange] = useMutation(DELETE_EXCHANGE_MUTATION, {
    onCompleted: () => {
      toast.success('Exchange deleted')
      navigate(routes.exchanges())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteExchangeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete exchange ' + id + '?')) {
      deleteExchange({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Exchange {exchange.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{exchange.id}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(exchange.createdAt)}</td>
            </tr><tr>
              <th>Name</th>
              <td>{exchange.name}</td>
            </tr><tr>
              <th>Admin id</th>
              <td>{exchange.adminId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExchange({ id: exchange.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(exchange.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Exchange
