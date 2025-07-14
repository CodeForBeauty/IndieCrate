import Card from './Card'

const CardsList = ({ cards }) => {
  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-center-safe
        justify-items-center-safe items-start bg-blue-100/10 backdrop-blur-3xl backdrop-opacity-50 pt-4'
    >
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  )
}

export default CardsList
