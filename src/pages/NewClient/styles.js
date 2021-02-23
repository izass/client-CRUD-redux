import styled from 'styled-components'

import BContainer from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export const Container = styled(BContainer) `
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  h1 {
    align-self: center;
  }
`

export const SaveButton = styled(Button) `
  float: right;
`

export {
  Form,
  Spinner,
  Button
}
