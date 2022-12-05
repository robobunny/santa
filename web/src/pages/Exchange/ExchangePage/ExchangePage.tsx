import ExchangeCell from 'src/components/Exchange/ExchangeCell'

type ExchangePageProps = {
  id: number
}

const ExchangePage = ({ id }: ExchangePageProps) => {
  return <ExchangeCell id={id} />
}

export default ExchangePage
