import { render, screen, cleanup } from '@testing-library/react'
import Card from './Card'

describe('<Card>', () => {
  test('card renders correctly', async () => {
    const game = {
      name: 'Name',
      price: 10,
      publisher: 'Publisher',
      reviews: 'Mixed',
      img: 'imgurl',
    }

    const { container } = render(<Card card={game} />)

    const name = await screen.findByText(game.name)
    expect(name).toBeDefined()
    const price = await screen.findByText(`$${game.price}`)
    expect(price).toBeDefined()
    const publisher = await screen.findByText(game.publisher)
    expect(publisher).toBeDefined()
    const reviews = await screen.findByText(game.reviews)
    expect(reviews).toBeDefined()

    const img = await container.querySelector('img')
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

    render(<Card card={game} />)

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

    const reviewTypes = {
      'Overwhelmingly Positive': 'text-green-800',
      'Very Positive': 'text-green-600',
      'Positive': 'text-blue-800',
      'Mostly Positive': 'text-blue-600',
      'Mixed': 'text-yellow-600',
      'Mostly Negative': 'text-orange-600',
      'Negative': 'text-orange-800',
      'Very Negative': 'text-red-800',
      'Overwhelmingly Negative': 'text-red-900',
      'gibberish': 'text-yellow-600'
    }

    for (const [ review, color ] of Object.entries(reviewTypes)) {
      render(<Card card={ {...game, reviews: review} } />)
      const reviews = await screen.findByText(review)
      expect(reviews).toHaveClass(color)
      cleanup()
    }
  })
})
