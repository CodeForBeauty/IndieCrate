import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './reducers/gamesReducer'

const store = configureStore({
  reducer: {
    games: gamesReducer,
  }
})

export default store