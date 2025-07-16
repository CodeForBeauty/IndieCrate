export const reviewColorMap = {
  'Overwhelmingly Positive': 'text-green-800',
  'Very Positive': 'text-green-600',
  Positive: 'text-blue-800',
  'Mostly Positive': 'text-blue-600',
  Mixed: 'text-yellow-600',
  'Mostly Negative': 'text-orange-600',
  Negative: 'text-orange-800',
  'Very Negative': 'text-red-800',
  'Overwhelmingly Negative': 'text-red-900',
  gibberish: 'text-yellow-600',
}

export const getReviewColor = (reviews) => {
  return reviews in reviewColorMap
    ? reviewColorMap[reviews]
    : reviewColorMap.gibberish
}

export const getFavorites = () => {
  const favoritesJSON = window.localStorage.getItem('favorites')
  let favorites = []
  if (favoritesJSON) {
    favorites = JSON.parse(favoritesJSON)
  }
  return favorites
}

export const getIsFavorite = (game) => {
  if (!game) {
    return false
  }
  const favorites = getFavorites()
  return favorites.includes(game.id)
}

export const addFavorite = (game) => {
  const favorites = getFavorites()
  favorites.push(game.id)
  window.localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const removeFavorite = (game) => {
  const favorites = getFavorites()
  window.localStorage.setItem('favorites', JSON.stringify(favorites.filter(element => game.id !== element)))
}