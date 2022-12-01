import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Wish/WishesCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteWishMutationVariables, FindWishes } from 'types/graphql'

const DELETE_WISH_MUTATION = gql`
  mutation DeleteWishMutation($id: Int!) {
    deleteWish(id: $id) {
      id
    }
  }
`

const WishesList = ({ wishes }: FindWishes) => {
  const [deleteWish] = useMutation(DELETE_WISH_MUTATION, {
    onCompleted: () => {
      toast.success('Wish deleted')
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

  const onDeleteClick = (id: DeleteWishMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete wish ' + id + '?')) {
      deleteWish({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {wishes.map((wish) => (
            <tr key={wish.id}>
              <td>{truncate(wish.id)}</td>
              <td>{truncate(wish.userId)}</td>
              <td>{truncate(wish.name)}</td>
              <td>{truncate(wish.description)}</td>
              <td>{truncate(wish.price)}</td>
              <td>{truncate(wish.url)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.wish({ id: wish.id })}
                    title={'Show wish ' + wish.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWish({ id: wish.id })}
                    title={'Edit wish ' + wish.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete wish ' + wish.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(wish.id)}
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

export default WishesList
