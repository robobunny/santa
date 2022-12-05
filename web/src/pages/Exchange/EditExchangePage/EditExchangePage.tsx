import EditExchangeCell from 'src/components/Exchange/EditExchangeCell'

type ExchangePageProps = {
  id: number
}

const EditExchangePage = ({ id }: ExchangePageProps) => {
  return <EditExchangeCell id={id} />
}

export default EditExchangePage
