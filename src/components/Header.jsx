const Header = () => {
  return (
    <div
      className='flex flex-row justify-between items-stretch align-middle bg-amber-900 h-15 w-screen 
        text-blue-50 sticky top-0 z-50 shadow-2xl rounded-lg'
    >
      <a href='/' className='bg-amber-700 hover:bg-amber-800 p-4'>
        main
      </a>
      <div className='flex align-middle'>
        <input className='bg-amber-50 mt-2 mb-2 pl-2 pr-2 text-black rounded-l-lg' />
        <button className='bg-amber-700 hover:bg-amber-800 mb-2 mt-2 pl-4 pr-4 rounded-r-lg'>
          search
        </button>
      </div>
      <a className='bg-amber-700 hover:bg-amber-800 p-4 pr-6'>favorites</a>
    </div>
  )
}

export default Header
