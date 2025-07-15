import CardsList from './CardsList'
import { useSelector } from 'react-redux'
import selectFiltered from '../selectors/filterSelector'

const Main = () => {
  const cards = useSelector(selectFiltered)

  return (
    <>
      <div
        className='flex flex-col align-middle items-stretch justify-center text-center 
          bg-amber-700/40 backdrop-blur-2xl pt-2 pb-2 text-amber-50'
      >
        <h1 className='text-8xl'>Idie Crate</h1>
        <h2 className='text-4xl'>catalogue of indie games</h2>
      </div>
      <CardsList cards={cards} />
    </>
  )
}

export default Main
