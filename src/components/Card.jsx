import { Link } from "react-router-dom"

const Card = ({ card }) => {
  let reviewColor = ''
  switch (card.reviews) {
    case 'Overwhelmingly Positive':
      reviewColor = 'text-green-800'
      break
    case 'Very Positive':
      reviewColor = 'text-green-600'
      break
    case 'Positive':
      reviewColor = 'text-blue-800'
      break
    case 'Mostly Positive':
      reviewColor = 'text-blue-600'
      break
    case 'Mixed':
      reviewColor = 'text-yellow-600'
      break
    case 'Mostly Negative':
      reviewColor = 'text-orange-600'
      break
    case 'Negative':
      reviewColor = 'text-orange-800'
      break
    case 'Very Negative':
      reviewColor = 'text-red-800'
      break
    case 'Overwhelmingly Negative':
      reviewColor = 'text-red-900'
      break
    default:
      reviewColor = 'text-yellow-600'
      break
  }
  return (
    <Link
      to={`/card/${card.id}`}
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
