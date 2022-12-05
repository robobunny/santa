import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditExchangeById, UpdateExchangeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormExchange = NonNullable<EditExchangeById['exchange']>

interface ExchangeFormProps {
  exchange?: EditExchangeById['exchange']
  onSave: (data: UpdateExchangeInput, id?: FormExchange['id']) => void
  error: RWGqlError
  loading: boolean
}

const ExchangeForm = (props: ExchangeFormProps) => {
  const onSubmit = (data: FormExchange) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.exchange?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormExchange> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.exchange?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="adminId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admin id
        </Label>
        
          <NumberField
            name="adminId"
            defaultValue={props.exchange?.adminId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="adminId" className="rw-field-error" />

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

export default ExchangeForm
