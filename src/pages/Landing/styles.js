import styled from 'styled-components'

import BContainer from 'react-bootstrap/Container'
import BPagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'


export const Container = styled(BContainer) `
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  .add-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: flex-end;

    width: 100px;
    padding: 0.3rem 1rem;
  }

  table {
    margin-top: 1rem;
  }
`
export const Pagination = styled(BPagination) `
  position: fixed;
  bottom: 0;
  margin-bottom: 5rem;
`
export const TableCellActions = styled.td `
  display: flex;
  justify-content: space-evenly;
`

export {
  Button,
  Table,
  Modal,
  Spinner
}
