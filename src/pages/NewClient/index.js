import React from 'react'

import { Button, Container, Form } from 'react-bootstrap'
import { useFormik } from 'formik'

function NewClient() {
  const formik = useFormik({
    initialValues: {
      value: '',
      monthyPrice: '',
      setupPrie: '',
      currency: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container className="d-flex flex-column">
      <h1 className="align-self-center">New Client</h1>
      <Form onSubmit={formik.handleSubmit}>

        <Form.Group>
          <Form.Label>value</Form.Label>
          <Form.Control
            name="value"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.value}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Monthy price</Form.Label>
          <Form.Control
            name="monthyPrice"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.monthyPrice}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Setup Price</Form.Label>
          <Form.Control
            name="setupPrice"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.setupPrice}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Currency</Form.Label>
          <Form.Control
            name="currency"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.currency}
          />
        </Form.Group>

        <Button type="submit" className="float-right">add</Button>
      </Form>
    </Container>
  )
}

export default NewClient