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
