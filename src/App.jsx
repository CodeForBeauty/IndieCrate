import { useEffect } from 'react'
import CardsList from './components/CardsList'
import Header from './components/Header'
import { getGames } from './reducers/gamesReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const cards = useSelector(({ games }) => games)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [])

  return (
    <div className='bg-[url(/Background.png)] bg-scroll bg-contain overflow-auto bg-origin-border h-screen'>
      <Header />
      <div className='flex flex-col align-middle items-stretch justify-center w-screen text-center 
          bg-amber-700/40 backdrop-blur-2xl pt-2 pb-2 text-amber-50'>
        <h1 className='text-8xl'>
          Idie Crate
        </h1>
        <h2 className='text-4xl'>
          list of indie games
        </h2>
      </div>
      <CardsList cards={cards} />
    </div>
  )
}

export default App
