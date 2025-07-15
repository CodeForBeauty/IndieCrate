import { useDispatch } from 'react-redux'
import { getGames } from './reducers/gamesReducer'
import { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import GameView from './components/GameView'
import { Route, Routes, useMatch } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [])

  const match = useMatch('/game/:id')
  const gameId = match ? Number(match.params.id) : null

  return (
    <div className='bg-[url(/Background.png)] bg-scroll bg-contain overflow-auto bg-origin-border h-screen font-["Inter",sans-serif]'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game/:id' element={<GameView gameId={gameId} />} />
      </Routes>
    </div>
  )
}

export default App
