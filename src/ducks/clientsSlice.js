import { createSlice } from '@reduxjs/toolkit'

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    items: [],
    count: 1,
  },
  reducers: {
    setClients: (state, action) => {
      state.items = action.payload
    },
    setCount: (state, action) => {
      state.count = action.payload
    }
  }
})

export const { setClients, setCount } = clientsSlice.actions

window.clientsSlice = clientsSlice

export default clientsSlice.reducer