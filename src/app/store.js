import { configureStore } from '@reduxjs/toolkit'
import { clientsSlice } from '../ducks/clientsSlice'

const store = configureStore({
  reducer: {
    clientsSlice: clientsSlice.reducer
  }
})

export default store