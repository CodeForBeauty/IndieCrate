import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './reducers/gamesReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterReducer
  },
})

export default store
