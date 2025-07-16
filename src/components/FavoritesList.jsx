import CardsList from './CardsList'
import { useSelector } from 'react-redux'
import { getFavorites } from '../utils/gameUtils'

const FavoritesList = () => {
  const cards = useSelector(({ games, filter }) => {
    const favorites = getFavorites()
    return games.filter(
      (game) =>
        favorites.includes(game.id) &&
        game.name.toLowerCase().includes(filter.toLowerCase()),
    )
  })

  return (
    <>
      <div
        className='flex flex-col align-middle items-stretch justify-center text-center 
          bg-amber-700/40 backdrop-blur-2xl pt-2 pb-2 text-amber-50'
      >
        <h1 className='text-8xl'>Favorites</h1>
        <h2 className='text-4xl'>favorited games</h2>
      </div>
      <CardsList cards={cards} />
    </>
  )
}

export default FavoritesList
