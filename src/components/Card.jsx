import { Link } from 'react-router-dom'
import { getReviewColor } from '../utils/gameUtils'

const Card = ({ card }) => {
  let reviewColor = getReviewColor(card.reviews)
  return (
    <Link
      to={`/game/${card.id}`}
      className='flex flex-col text-2xl text-blue-950 bg-amber-50/50 border-2
        hover:border-blue-200/50 rounded-lg size-fit p-4 backdrop-blur-3xl backdrop-opacity-85 border-amber-50/50
        hover:backdrop-opacity-95 w-80 md:w-[19rem] h-96 shadow-neutral-800 shadow-2xl hover:shadow-xl hover:rounded-xl
        transition-all duration-200 ease-linear'
    >
      <img src={card.img} className='rounded-xl' />
      <div className='text-3xl font-bold'>{card.name}</div>
      <div className='flex flex-col size-full justify-end pb-4'>
        <div className='text-green-800'>
          {card.price === 0 ? 'Free' : `$${card.price}`}
        </div>
        <div>{card.publisher}</div>
        <div className={reviewColor}>{card.reviews}</div>
      </div>
    </Link>
  )
}

export default Card
