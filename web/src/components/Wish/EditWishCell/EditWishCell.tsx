import type { EditWishById, UpdateWishInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WishForm from 'src/components/Wish/WishForm'

export const QUERY = gql`
  query EditWishById($id: Int!) {
    wish: wish(id: $id) {
      id
      createdAt
      title
      url
      description
      userId
    }
  }
`
const UPDATE_WISH_MUTATION = gql`
  mutation UpdateWishMutation($id: Int!, $input: UpdateWishInput!) {
    updateWish(id: $id, input: $input) {
      id
      createdAt
      title
      url
      description
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ wish }: CellSuccessProps<EditWishById>) => {
  const [updateWish, { loading, error }] = useMutation(
    UPDATE_WISH_MUTATION,
    {
      onCompleted: () => {
        toast.success('Wish updated')
        navigate(routes.wishes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateWishInput,
    id: EditWishById['wish']['id']
  ) => {
    updateWish({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Wish {wish?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WishForm wish={wish} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
