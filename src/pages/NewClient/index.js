import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Form, Spinner } from 'react-bootstrap'
import { useFormik } from 'formik'
import MaskedInput from 'react-text-mask'

import LoadingPage from '../../components/LoadingPage'
import validationSchema from '../../validations/newClientValidation'
import { setClients, setCount } from '../../ducks/clientsSlice'
import { withRouter } from 'react-router-dom'


function NewClient(props) {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.clientsSlice.items)
  const count = useSelector(state => state.clientsSlice.count)

  const [loadingPage, setLoadingPage] = useState(true)
  const [currentClient, setCurrentClient] = useState(null)


  useEffect(() => {
    setTimeout(() => {
      if (props.match.params.id) {
        const found = clients.find(client => client.id == props.match.params.id)
        setCurrentClient(found)
      }

      setLoadingPage(false)
    }, 2000)
  }, [])

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isSubmitting,
    setSubmitting
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      value: currentClient ? currentClient.value : '',
      monthyPrice: currentClient ? currentClient.monthyPrice : '',
      setupPrice: currentClient ? currentClient.setupPrice : '',
      currency: currentClient ? currentClient.currency : ''
    },
    validationSchema,
    onSubmit: values => {
      setTimeout(() => {
        if (currentClient) {
          const filter = clients.filter(client => client.id != currentClient.id)
          const editedClient = {
            id: currentClient.id,
            ...values
          }


          dispatch(setClients([editedClient, ...filter]))
          setSubmitting(false)
          props.history.push("/")
          return
        }

        const newClient = {
          id: count+1,
          ...values
        }
        dispatch(setClients([...clients, newClient]))
        dispatch(setCount(count + 1))
        setSubmitting(false)
        props.history.push("/")
      }, 2000)
    },
  });

  if (loadingPage) {
    return <LoadingPage />
  }

  return (
    <Container className="d-flex flex-column">
      <h1 className="align-self-center">New Client</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>value</Form.Label>
          <Form.Control
            as={MaskedInput}
            mask={['+', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            name="value"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.value}
            isInvalid={touched.value && errors.value}
          />
          <Form.Control.Feedback type="invalid">{errors.value}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Monthy price</Form.Label>
          <Form.Control
            name="monthyPrice"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.monthyPrice}
            isInvalid={touched.monthyPrice && errors.monthyPrice}
          />
          <Form.Control.Feedback type="invalid">{errors.monthyPrice}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Setup Price</Form.Label>
          <Form.Control
            name="setupPrice"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.setupPrice}
            isInvalid={touched.setupPrice && errors.setupPrice}
          />
          <Form.Control.Feedback type="invalid">{errors.setupPrice}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Currency</Form.Label>
          <Form.Control
            name="currency"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.currency}
            isInvalid={touched.currency && errors.currency}
          />
          <Form.Control.Feedback type="invalid">{errors.currency}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="float-right" disabled={isSubmitting}>
          Save
          {isSubmitting &&
            <Spinner animation="grow" size="sm"/>
          }
        </Button>
      </Form>
    </Container>
  )
}

export default withRouter(NewClient)