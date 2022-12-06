import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditWishById, UpdateWishInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormWish = NonNullable<EditWishById['wish']>

interface WishFormProps {
  wish?: EditWishById['wish']
  onSave: (data: UpdateWishInput, id?: FormWish['id']) => void
  error: RWGqlError
  loading: boolean
}

const WishForm = (props: WishFormProps) => {
  const onSubmit = (data: FormWish) => {
    props.onSave(data, props?.wish?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormWish> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
          <TextField
            name="title"
            defaultValue={props.wish?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>
          <TextField
            name="url"
            defaultValue={props.wish?.url}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        <FieldError name="url" className="rw-field-error" />
        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
          <TextField
            name="description"
            defaultValue={props.wish?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        <FieldError name="description" className="rw-field-error" />
        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
          <NumberField
            name="userId"
            defaultValue={props.wish?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        <FieldError name="userId" className="rw-field-error" />
        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WishForm
