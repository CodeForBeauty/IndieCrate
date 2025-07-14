import { createSlice } from '@reduxjs/toolkit'
import gamesService from '../services/games'

const gamesReducer = createSlice({
  name: 'games',
  initialState: [],
  reducers: {
    setGames(state, action) {
      return action.payload
    },
  },
})

export const { setGames } = gamesReducer.actions
export default gamesReducer.reducer

export const getGames = () => {
  return async (dispatch) => {
    const data = await gamesService.getAll()
    dispatch(setGames(data))
  }
}
