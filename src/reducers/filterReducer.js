import { createSlice } from '@reduxjs/toolkit'

const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload
    },
    clearFilter(state, action) {
      return ''
    },
  },
})

export const { setFilter, clearFilter } = filterReducer.actions
export default filterReducer.reducer
