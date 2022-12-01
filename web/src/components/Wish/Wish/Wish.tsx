
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteWishMutationVariables, FindWishById } from 'types/graphql'

const DELETE_WISH_MUTATION = gql`
  mutation DeleteWishMutation($id: Int!) {
    deleteWish(id: $id) {
      id
    }
  }
`

interface Props {
  wish: NonNullable<FindWishById['wish']>
}

const Wish = ({ wish }: Props) => {
  const [deleteWish] = useMutation(DELETE_WISH_MUTATION, {
    onCompleted: () => {
      toast.success('Wish deleted')
      navigate(routes.wishes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteWishMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete wish ' + id + '?')) {
      deleteWish({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Wish {wish.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{wish.id}</td>
            </tr><tr>
              <th>User id</th>
              <td>{wish.userId}</td>
            </tr><tr>
              <th>Name</th>
              <td>{wish.name}</td>
            </tr><tr>
              <th>Description</th>
              <td>{wish.description}</td>
            </tr><tr>
              <th>Price</th>
              <td>{wish.price}</td>
            </tr><tr>
              <th>Url</th>
              <td>{wish.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWish({ id: wish.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(wish.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Wish
