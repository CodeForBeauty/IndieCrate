import { useDispatch, useSelector } from 'react-redux'
import { getGames } from './reducers/gamesReducer'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import GameView from './components/GameView'
import FavoritesList from './components/FavoritesList'
import { Route, Routes, useMatch } from 'react-router-dom'

const App = () => {
  const isDark = useSelector(({ dark }) => dark)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [])

  const match = useMatch('/game/:id')
  const gameId = match ? Number(match.params.id) : null

  return (
    <div
      className={
        (isDark ? 'dark ' : '') +
        'bg-[url(/Background.png)] dark:bg-black bg-scroll bg-contain overflow-auto bg-origin-border h-screen font-["Inter",sans-serif] flex flex-col transition-all duration-500'
      }
    >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game/:id' element={<GameView gameId={gameId} />} />
        <Route path='/favorites' element={<FavoritesList />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
