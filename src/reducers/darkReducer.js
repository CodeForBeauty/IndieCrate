import { createSlice } from '@reduxjs/toolkit'

const isDark = window.localStorage.getItem('dark') === 'true'

const darkReducer = createSlice({
  name: 'dark',
  initialState: isDark,
  reducers: {
    setDark(state, action) {
      window.localStorage.setItem('dark', action.payload ? 'true' : 'false')
      return action.payload
    },
  },
})

export const { setDark } = darkReducer.actions
export default darkReducer.reducer
