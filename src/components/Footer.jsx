const Footer = () => {
  return (
    <div className='flex flex-col text-blue-50 h-max justify-end'>
      <div className='text-center bg-amber-900 p-4'>
        <p>I do not claim to own any of the data provided here.</p>
        <p>
          If you wish to remove your game from this catalogue please contact me
          at:{' '}
          <a href='mailto:nursultanmamatov@proton.me' className="text-blue-400">
            nursultanmamatov@proton.me
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
