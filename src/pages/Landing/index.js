import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import chunk from 'lodash.chunk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPen,
  faTrash,
  faExclamationTriangle,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

import { setClients } from '../../ducks/clientsSlice'
import LoadingPage from '../../components/LoadingPage'
import {
  Container,
  Pagination,
  TableCellActions,
  Button,
  Table,
  Modal,
  Spinner
} from './styles'


function Landing() {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.clientsSlice.items)

  const [pages, setPages] = useState([[]])
  const [currentPage, setCurrentPage] = useState(0)
  const [show, setShow] = useState(false);
  const [selectedCientId, setSelectedClientId] = useState(null)
  const [loadingAction, setLoadingAction] = useState(false)
  const [loadingPage, setLoadingPage] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => {
      const pagesPartition = chunk(clients, 10)

      if (pagesPartition[currentPage] === undefined && pagesPartition.length > 0) {
        setCurrentPage(currentPage-1)
        setPages(chunk(clients, 10))
      } else {
        setPages(chunk(clients, 10))
      }
      setLoadingPage(false)
    }, 2000)
  }, [clients])

  const nexPage = () => {
    setCurrentPage(currentPage+1)
  }

  const previousPage = () => {
    if (currentPage === 0) {
      return
    }

    setCurrentPage(currentPage-1)
  }

  const deleteClient = () => {
    setLoadingAction(true)
    setTimeout(() => {
      const filter = clients.filter(client => client.id !== selectedCientId)
      dispatch(setClients(filter))
      setLoadingAction(false)
      handleClose()
    }, 2000)
  }

  function renderPagination() {
    let pagination = []
    for (let i=0; i < pages.length; i++) {
      pagination.push(
        <Pagination.Item
          key={i}
          onClick={() => setCurrentPage(i)}
          active={i === currentPage}
        >{i+1}</Pagination.Item>
      )
    }

    if (pagination.length > 5) {
      let longPagination = [
        pagination[0],
        pagination[1],
        <Pagination.Ellipsis />,
        pagination[pages.length-2],
        pagination[pages.length-1]
      ]

      return longPagination
    }

    return pagination
  }

  if (loadingPage) {
    return <LoadingPage />
  }

  function renderClientsList() {
    if (pages[currentPage] === undefined) {
      return
    }

    return pages[currentPage].map(client =>
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.value}</td>
          <td>{client.monthyPrice}</td>
          <td>{client.setupPrice}</td>
          <td>{client.currency}</td>
          <TableCellActions>
            <Button as={Link} to ={`/client/${client.id}`}>
              <FontAwesomeIcon icon={faPen} />
            </Button>
            <Button variant="danger" onClick={() => {
              setSelectedClientId(client.id)
              handleShow()
            }}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </TableCellActions>
        </tr>
      )
  }

  return (
    <Container>
      <h1>Table Control</h1>
      <Button as={Link} to="/newclient" className="add-btn">
        Add
        <FontAwesomeIcon icon={faPlusCircle} />
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>value</th>
            <th>Monthy price</th>
            <th>Setup price</th>
            <th>currency</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>
          {renderClientsList()}
        </tbody>
      </Table>

      <Modal show={show} onHide={loadingAction ? null : handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faExclamationTriangle}/>{" "}
            WARNING
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the client from id {selectedCientId}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={loadingAction}>
            cancel
          </Button>
          <Button variant="danger" onClick={deleteClient} disabled={loadingAction}>
            Delete
            {loadingAction &&
              <Spinner animation="grow" size="sm"/>
            }
          </Button>
        </Modal.Footer>
      </Modal>

      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(0)} disabled={currentPage === 0} />
        <Pagination.Prev onClick={previousPage} disabled={currentPage === 0}/>
        {renderPagination()}
        <Pagination.Next onClick={nexPage} disabled={currentPage === pages.length -1 || pages.length === 0}/>
        <Pagination.Last onClick={() => setCurrentPage(pages.length-1)} disabled={currentPage === pages.length -1 || pages.length === 0} />
      </Pagination>

    </Container>
  )
}

export default withRouter(Landing)