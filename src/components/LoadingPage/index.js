import Spinner from 'react-bootstrap/Spinner'

import { Container } from './styles'

const LoadingPage = () => {
  return (
    <Container>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  )
}

export default LoadingPage