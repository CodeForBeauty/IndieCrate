import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  getReviewColor,
  getIsFavorite,
  addFavorite,
  removeFavorite,
} from '../utils/gameUtils'

const GameView = ({ gameId }) => {
  const [favorite, setFavorite] = useState(false)

  const game = useSelector(({ games }) =>
    games.find((game) => game.id === gameId),
  )

  useEffect(() => {
    setFavorite(getIsFavorite(game))
  }, [game])

  if (!game) {
    return null
  }
  let reviewColor = getReviewColor(game.reviews)

  const handleToggleFavorite = () => {
    if (getIsFavorite(game)) {
      removeFavorite(game)
      setFavorite(false)
    } else {
      addFavorite(game)
      setFavorite(true)
    }
  }

  return (
    <div className='flex flex-row justify-center h-[70%] grow'>
      <div className='flex flex-row justify-center bg-blue-100/60 p-8 mt-4 mb-4 rounded-xl backdrop-blur-2xl'>
        <img src={game.img} className='rounded-xl pr-4' />
        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold'>{game.name}</h2>
          <div className='text-xl text-green-700'>
            {game.price === 0 ? 'Free' : `$${game.price}`}
          </div>
          <div>
            Publish date: <strong>{game.publish_date}</strong>
          </div>
          <div>
            Publisher: <strong>{game.publisher}</strong>
          </div>
          <div>
            Developer: <strong>{game.developer}</strong>
          </div>
          <strong className={reviewColor + ' text-2xl'}>{game.reviews}</strong>
          <a
            href={game.steam_link}
            target='_blank'
            className='w-fit bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white'
          >
            steam
          </a>
          <button
            className={
              (favorite ? 'bg-amber-600' : 'bg-amber-500') +
              ' hover:bg-amber-700 w-15 h-15 mt-2 cursor-pointer'
            }
            style={{
              WebkitMaskImage: "url('/star.png')",
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'cover',
              maskImage: "url('/star.png')",
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
            }}
            onClick={handleToggleFavorite}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default GameView
