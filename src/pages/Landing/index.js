import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Button, Container, Table, Pagination, Modal, Spinner } from 'react-bootstrap'

import { setClients } from '../../ducks/clientsSlice'
import LoadingPage from '../../components/LoadingPage'


function Landing() {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.clientsSlice.items)

  const [pagesNumber, setPagesNumber] = useState(1)
  const [show, setShow] = useState(false);
  const [selectedCientId, setSelectedClientId] = useState(null)
  const [loadingAction, setLoadingAction] = useState(false)
  const [loadingPage, setLoadingPage] = useState(true)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false)
    }, 2000)
  }, [])


  useEffect(() => {
    setPagesNumber(calculatePagesNumber())
  }, [calculatePagesNumber])

  function calculatePagesNumber() {
    if (clients.length % 10 === 0) {
      return clients.length/10
    }
    return parseInt((clients.length/10) + 1)
  }

  function deleteClient() {
    setLoadingAction(true)
    setTimeout(() => {
      let list = clients.filter(client => client.id !== selectedCientId)

      dispatch(setClients(list))

      setLoadingAction(false)
      handleClose()
    }, 2000)
  }

  function renderPagination() {
    let pagination = []
    for (let i=0; i < pagesNumber; i++) {
      pagination.push(
        <Pagination.Item key={i}>{i+1}</Pagination.Item>
      )
    }

    if (pagination.length > 5) {
      let longPagination = [
        pagination[0],
        pagination[1],
        <Pagination.Ellipsis />,
        pagination[pagesNumber-2],
        pagination[pagesNumber-1]
      ]

      return longPagination
    }

    return pagination
  }

  if (loadingPage) {
    return <LoadingPage />
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>hello</h1>
      <Button as={Link} to="/newclient">add</Button>
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
          {clients.map((client, index) =>
            <tr key={index}>
              <td>{client.id}</td>
              <td>{client.value}</td>
              <td>{client.monthyPrice}</td>
              <td>{client.setupPrice}</td>
              <td>{client.currency}</td>
              <td className="d-flex justify-content-center">
                <Button as={Link} to ={`/client/${client.id}`}>#</Button>
                <Button variant="danger" onClick={() => {
                  setSelectedClientId(client.id)
                  handleShow()
                }}>x</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal show={show} onHide={loadingAction ? null : handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>WARNING</Modal.Title>
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
        <Pagination.First />
        <Pagination.Prev />
        {renderPagination()}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

    </Container>
  )
}

export default withRouter(Landing)