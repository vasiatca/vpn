const Stats = () => {
  return (
    <div className='flex'>
      <div className='mr-2 flex items-center'>
        <p className='text-black opacity-50'>4.37 GB</p>
        <svg
          className='mt-0.5 ml-2'
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z'
            fill='black'
            fillOpacity='0.48'
          />
        </svg>
      </div>
      <div className='flex items-center'>
        <svg
          className='mt-0.5 mr-2'
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 6L1.0575 7.0575L5.25 2.8725L5.25 12H6.75L6.75 2.8725L10.935 7.065L12 6L6 0L0 6Z'
            fill='black'
            fillOpacity='0.48'
          />
        </svg>
        <p className='text-black opacity-50'>1.23 GB</p>
      </div>
    </div>
  )
}

export default Stats
