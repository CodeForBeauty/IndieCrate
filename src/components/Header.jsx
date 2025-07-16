import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Header = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(setFilter(event.target.filter.value.toLowerCase()))
  }

  return (
    <div
      className='flex flex-row justify-between items-stretch align-middle bg-amber-900 h-15 
        text-blue-50 sticky top-0 z-50 shadow-2xl rounded-lg'
    >
      <Link to='/' className='bg-amber-700 hover:bg-amber-800 p-4'>
        main
      </Link>
      <form onSubmit={handleSubmit} className='flex align-middle'>
        <input
          name='filter'
          className='bg-amber-50 mt-2 mb-2 pl-2 pr-2 text-black rounded-l-lg'
        />
        <button
          type='submit'
          className='bg-amber-700 hover:bg-amber-800 mb-2 mt-2 pl-4 pr-4 rounded-r-lg cursor-pointer'
        >
          search
        </button>
      </form>
      <Link
        to='/favorites'
        className='bg-amber-600 hover:bg-amber-700 w-15 m-2'
        style={{
          WebkitMaskImage: "url('/star.png')",
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage: "url('/star.png')",
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
        }}
      ></Link>
    </div>
  )
}

export default Header
