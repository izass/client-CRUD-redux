import React from 'react'
import {Button, Container, Table } from 'react-bootstrap'

function Landing() {
  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>hello</h1>
      <Button>add</Button>
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
          {clientsList.map((client, index) =>
            <tr key={index}>
              <td>{client.id}</td>
              <td>{client.value}</td>
              <td>{client.monthyPrice}</td>
              <td>{client.setupPrice}</td>
              <td>{client.currency}</td>
              <td className="d-flex justify-content-center">
                <button>#</button>
                <button>x</button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}

const clientsList = [
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  }
]

export default Landing