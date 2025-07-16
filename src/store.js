import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './reducers/gamesReducer'
import filterReducer from './reducers/filterReducer'
import darkReducer from './reducers/darkReducer'

const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterReducer,
    dark: darkReducer
  },
})

export default store
