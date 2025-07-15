import { render, screen, cleanup } from '@testing-library/react'
import Card from './Card'
import { reviewColorMap } from '../utils/gameUtils'
import { BrowserRouter } from 'react-router-dom'

describe('<Card>', () => {
  test('card renders correctly', async () => {
    const game = {
      name: 'Name',
      price: 10,
      publisher: 'Publisher',
      reviews: 'Mixed',
      img: 'imgurl',
    }

    const { container } = render(
      <BrowserRouter>
        <Card card={game} />
      </BrowserRouter>,
    )

    const name = await screen.findByText(game.name)
    expect(name).toBeDefined()
    const price = await screen.findByText(`$${game.price}`)
    expect(price).toBeDefined()
    const publisher = await screen.findByText(game.publisher)
    expect(publisher).toBeDefined()
    const reviews = await screen.findByText(game.reviews)
    expect(reviews).toBeDefined()

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', game.img)
  })

  test('price displays Free', async () => {
    const game = {
      name: 'Name',
      price: 0,
      publisher: 'Publisher',
      reviews: 'Mixed',
      img: 'imgurl',
    }

    render(
      <BrowserRouter>
        <Card card={game} />
      </BrowserRouter>,
    )

    const price = await screen.findByText('Free')
    expect(price).toBeDefined()
  })

  test('reviews have correct color', async () => {
    const game = {
      name: 'Name',
      price: 10,
      publisher: 'Publisher',
      reviews: 'Overwhelmingly Positive',
      img: 'imgurl',
    }

    for (const [review, color] of Object.entries(reviewColorMap)) {
      render(
        <BrowserRouter>
          <Card card={{ ...game, reviews: review }} />
        </BrowserRouter>,
      )
      const reviews = await screen.findByText(review)
      expect(reviews).toHaveClass(color)
      cleanup()
    }
  })
})
