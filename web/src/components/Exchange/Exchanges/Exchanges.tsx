import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Exchange/ExchangesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteExchangeMutationVariables, FindExchanges } from 'types/graphql'

const DELETE_EXCHANGE_MUTATION = gql`
  mutation DeleteExchangeMutation($id: Int!) {
    deleteExchange(id: $id) {
      id
    }
  }
`

const ExchangesList = ({ exchanges }: FindExchanges) => {
  const [deleteExchange] = useMutation(DELETE_EXCHANGE_MUTATION, {
    onCompleted: () => {
      toast.success('Exchange deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteExchangeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete exchange ' + id + '?')) {
      deleteExchange({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Name</th>
            <th>Admin id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map((exchange) => (
            <tr key={exchange.id}>
              <td>{truncate(exchange.id)}</td>
              <td>{timeTag(exchange.createdAt)}</td>
              <td>{truncate(exchange.name)}</td>
              <td>{truncate(exchange.adminId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.exchange({ id: exchange.id })}
                    title={'Show exchange ' + exchange.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editExchange({ id: exchange.id })}
                    title={'Edit exchange ' + exchange.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete exchange ' + exchange.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(exchange.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExchangesList
