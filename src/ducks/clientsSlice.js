import { createSlice } from '@reduxjs/toolkit'

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    items: [],
    counterId: 0,
  },
  reducers: {
    setClients: (state, action) => {
      state.items = action.payload
    },
    setCounterId: (state, action) => {
      state.counterId = action.payload
    }
  }
})

export const { setClients, setCounterId } = clientsSlice.actions

window.clientsSlice = clientsSlice

export default clientsSlice.reducer