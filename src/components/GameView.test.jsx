import { render, screen, cleanup } from '@testing-library/react'
import GameView from './GameView'
import { reviewColorMap } from './gameUtils'
import { BrowserRouter } from 'react-router-dom'
import store from '../store'
import { beforeEach } from 'vitest'
import { Provider, useDispatch } from 'react-redux'
import { setGames } from '../reducers/gamesReducer'

describe('<GameView>', () => {
  const initialState = [
    {
      id: 0,
      name: 'Name',
      price: 10,
      publish_date: '2022-12-20',
      publisher: 'Publisher',
      developer: 'Developer',
      reviews: 'Mixed',
      img: 'imgurl',
      steam_link: 'link',
    },
    {
      id: 1,
      name: 'Name 1',
      price: 15,
      publish_date: '2025-05-20',
      publisher: 'Publisher 1',
      developer: 'Developer',
      reviews: 'Negative',
      img: 'imgurl',
      steam_link: 'link',
    },
    {
      id: 2,
      name: 'Name 2',
      price: 0,
      publish_date: '2024-12-15',
      publisher: 'Publisher',
      developer: 'Developer 1',
      reviews: 'Positive',
      img: 'imgurl',
      steam_link: 'link',
    },
  ]
  beforeEach(() => {
    store.dispatch(setGames(initialState))
  })

  test('renders correctly', async () => {
    const gameId = 0

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <GameView gameId={gameId} />
        </BrowserRouter>
        ,
      </Provider>,
    )

    const game = initialState[gameId]

    const name = await screen.findByText(game.name)
    expect(name).toBeDefined()
    const price = await screen.findByText(`$${game.price}`)
    expect(price).toBeDefined()
    const date = await screen.findByText(game.publish_date)
    expect(date).toBeDefined()
    const publisher = await screen.findByText(game.publisher)
    expect(publisher).toBeDefined()
    const developer = await screen.findByText(game.developer)
    expect(developer).toBeDefined()
    const reviews = await screen.findByText(game.reviews)
    expect(reviews).toBeDefined()

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', game.img)
    const link = await screen.findByText('steam')
    expect(link).toHaveAttribute('href', game.steam_link)
  })

  test('price displays Free', async () => {
    const gameId = 2

    render(
      <Provider store={store}>
        <BrowserRouter>
          <GameView gameId={gameId} />
        </BrowserRouter>
        ,
      </Provider>,
    )

    const game = initialState[gameId]

    const price = await screen.findByText('Free')
    expect(price).toBeDefined()
  })
})
