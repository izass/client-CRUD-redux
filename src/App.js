import React, { useEffect } from 'react'

import {
  Switch,
  Route,
} from "react-router-dom"
import { useDispatch } from 'react-redux'

import Landing from './pages/Landing'
import NewClient from './pages/NewClient'

import { setClients } from './ducks/clientsSlice'
import NotFound from './pages/NotFound'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    generateSeed(1)
  }, [dispatch])

  function generateSeed(size) {
    let seed = []
    for(let i=0; i<size; i++) {
      seed.push(
        {
          "id": i+1,
          "value": "+55 84 91234-4321",
          "monthyPrice": "0.03",
          "setupPrice": "3.40",
          "currency": "U$"
        }
      )
    }
    dispatch(setClients(seed))
  }

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/newclient" component={NewClient} />
      <Route exact path="/client/:id" component={NewClient} />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

export default App;
