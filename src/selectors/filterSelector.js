import { createSelector } from '@reduxjs/toolkit'

const selectGames = (state) => state.games
const selectFilter = (state) => state.filter

const selectFiltered = createSelector(
  [selectGames, selectFilter],
  (games, filter) =>
    games.filter((game) => game.name.toLowerCase().includes(filter)),
)

export default selectFiltered
