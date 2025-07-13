const Card = ({ card }) => {
  return (
    <a href="https://www.instagram.com/" className=" text-2xl text-blue-950 bg-amber-50/50 border-2
        hover:border-blue-200/50 rounded-lg size-fit p-4 backdrop-blur-3xl backdrop-opacity-85 border-amber-50/50
        hover:backdrop-opacity-95 w-80 md:w-[19rem] h-96 shadow-neutral-800 shadow-2xl hover:shadow-xl hover:rounded-xl
        transition-all duration-200 ease-linear">
      <div>{card.name}</div>
      <div>{card.publisher}</div>
      <div>{card.reviews}</div>
      <div>{card.is_hot}</div>
    </a>
  )
}

export default Card
