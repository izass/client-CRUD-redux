import { configureStore } from '@reduxjs/toolkit'
import { clientsSlice } from '../ducks/clientsSlice'

const store = configureStore({
  reducer: {
    clientsSlice: clientsSlice.reducer
  }
})

window.store = store

export default store