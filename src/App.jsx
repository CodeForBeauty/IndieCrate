import { useDispatch } from 'react-redux'
import { getGames } from './reducers/gamesReducer'
import { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [])

  return (
    <div className='bg-[url(/Background.png)] bg-scroll bg-contain overflow-auto bg-origin-border h-screen font-["Inter",sans-serif]'>
      <Header />
      <Routes>
        <Route path='/' element={ <Main/> } />
      </Routes>
    </div>
  )
}

export default App
