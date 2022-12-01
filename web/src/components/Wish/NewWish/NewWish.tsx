import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WishForm from 'src/components/Wish/WishForm'

import type { CreateWishInput } from 'types/graphql'

const CREATE_WISH_MUTATION = gql`
  mutation CreateWishMutation($input: CreateWishInput!) {
    createWish(input: $input) {
      id
    }
  }
`

const NewWish = () => {
  const [createWish, { loading, error }] = useMutation(
    CREATE_WISH_MUTATION,
    {
      onCompleted: () => {
        toast.success('Wish created')
        navigate(routes.wishes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateWishInput) => {
    createWish({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Wish</h2>
      </header>
      <div className="rw-segment-main">
        <WishForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWish
