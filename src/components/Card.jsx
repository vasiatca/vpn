import Stats from './Stats'

const Card = () => {
  return (
    <div className='rounded-lg border border-slate-200'>
      <div className='flex justify-between rounded-t-lg px-7 py-4'>
        <div>
          <p className='text-lg font-medium text-slate-800'>Alice</p>
          <p className='text-sm text-black opacity-50'>21 hours ago</p>
        </div>
        <div className='flex items-center'>
          <div className='mr-5 flex'>
            <label className='relative inline-flex cursor-pointer items-center'>
              <input type='checkbox' value='' className='peer sr-only' />
              <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          <div className='flex gap-2'>
            <div className='flex h-10 w-10 items-center justify-center rounded-md bg-gray-100'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12.75 10.5H10.75C10.6119 10.5 10.5 10.6119 10.5 10.75V12.75C10.5 12.8881 10.6119 13 10.75 13H12.75C12.8881 13 13 12.8881 13 12.75V10.75C13 10.6119 12.8881 10.5 12.75 10.5Z'
                  fill='#1A202C'
                />
                <path
                  d='M10.25 8.5H8.75C8.61193 8.5 8.5 8.61193 8.5 8.75V10.25C8.5 10.3881 8.61193 10.5 8.75 10.5H10.25C10.3881 10.5 10.5 10.3881 10.5 10.25V8.75C10.5 8.61193 10.3881 8.5 10.25 8.5Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  d='M14.75 13H13.25C13.1119 13 13 13.1119 13 13.25V14.75C13 14.8881 13.1119 15 13.25 15H14.75C14.8881 15 15 14.8881 15 14.75V13.25C15 13.1119 14.8881 13 14.75 13Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  d='M14.75 8.5H13.75C13.6119 8.5 13.5 8.61193 13.5 8.75V9.75C13.5 9.88807 13.6119 10 13.75 10H14.75C14.8881 10 15 9.88807 15 9.75V8.75C15 8.61193 14.8881 8.5 14.75 8.5Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  d='M9.75 13.5H8.75C8.61193 13.5 8.5 13.6119 8.5 13.75V14.75C8.5 14.8881 8.61193 15 8.75 15H9.75C9.88807 15 10 14.8881 10 14.75V13.75C10 13.6119 9.88807 13.5 9.75 13.5Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  d='M12.75 3H10.75C10.6119 3 10.5 3.11193 10.5 3.25V5.25C10.5 5.38807 10.6119 5.5 10.75 5.5H12.75C12.8881 5.5 13 5.38807 13 5.25V3.25C13 3.11193 12.8881 3 12.75 3Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.5 2C8.5 1.44772 8.94772 1 9.5 1H14C14.5523 1 15 1.44772 15 2V6.5C15 7.05229 14.5523 7.5 14 7.5H9.5C8.94772 7.5 8.5 7.05229 8.5 6.5V2ZM14 2H9.5V6.5H14V2Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  d='M5.25 3H3.25C3.11193 3 3 3.11193 3 3.25V5.25C3 5.38807 3.11193 5.5 3.25 5.5H5.25C5.38807 5.5 5.5 5.38807 5.5 5.25V3.25C5.5 3.11193 5.38807 3 5.25 3Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1 2C1 1.44772 1.44772 1 2 1H6.5C7.05229 1 7.5 1.44772 7.5 2V6.5C7.5 7.05229 7.05229 7.5 6.5 7.5H2C1.44772 7.5 1 7.05229 1 6.5V2ZM6.5 2H2V6.5H6.5V2Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  d='M5.25 10.5H3.25C3.11193 10.5 3 10.6119 3 10.75V12.75C3 12.8881 3.11193 13 3.25 13H5.25C5.38807 13 5.5 12.8881 5.5 12.75V10.75C5.5 10.6119 5.38807 10.5 5.25 10.5Z'
                  fill='black'
                  fillOpacity='0.8'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1 9.5C1 8.94772 1.44772 8.5 2 8.5H6.5C7.05229 8.5 7.5 8.94772 7.5 9.5V14C7.5 14.5523 7.05229 15 6.5 15H2C1.44772 15 1 14.5523 1 14V9.5ZM6.5 9.5H2V14H6.5V9.5Z'
                  fill='black'
                  fillOpacity='0.8'
                />
              </svg>
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-md bg-gray-100'>
              <svg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.399994 12.6C0.399994 12.3878 0.484279 12.1844 0.634308 12.0343C0.784338 11.8843 0.987821 11.8 1.19999 11.8H10.8C11.0122 11.8 11.2157 11.8843 11.3657 12.0343C11.5157 12.1844 11.6 12.3878 11.6 12.6C11.6 12.8122 11.5157 13.0157 11.3657 13.1657C11.2157 13.3157 11.0122 13.4 10.8 13.4H1.19999C0.987821 13.4 0.784338 13.3157 0.634308 13.1657C0.484279 13.0157 0.399994 12.8122 0.399994 12.6ZM3.03439 6.43441C3.18442 6.28443 3.38786 6.20018 3.59999 6.20018C3.81213 6.20018 4.01557 6.28443 4.16559 6.43441L5.19999 7.46881V1.40001C5.19999 1.18783 5.28428 0.98435 5.43431 0.834321C5.58434 0.684292 5.78782 0.600006 5.99999 0.600006C6.21217 0.600006 6.41565 0.684292 6.56568 0.834321C6.71571 0.98435 6.79999 1.18783 6.79999 1.40001V7.46881L7.83439 6.43441C7.90819 6.358 7.99647 6.29705 8.09407 6.25513C8.19167 6.2132 8.29665 6.19113 8.40287 6.19021C8.5091 6.18928 8.61444 6.20952 8.71276 6.24975C8.81107 6.28997 8.9004 6.34938 8.97551 6.42449C9.05062 6.49961 9.11003 6.58893 9.15025 6.68724C9.19048 6.78556 9.21072 6.8909 9.2098 6.99713C9.20887 7.10335 9.1868 7.20833 9.14488 7.30593C9.10295 7.40353 9.042 7.49181 8.96559 7.56561L6.56559 9.96561C6.41557 10.1156 6.21213 10.1998 5.99999 10.1998C5.78786 10.1998 5.58442 10.1156 5.43439 9.96561L3.03439 7.56561C2.88442 7.41558 2.80017 7.21214 2.80017 7.00001C2.80017 6.78788 2.88442 6.58443 3.03439 6.43441V6.43441Z'
                  fill='#1A202C'
                />
              </svg>
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-md bg-gray-100'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M3.33333 13.3333C3.33333 13.687 3.47381 14.0261 3.72386 14.2762C3.97391 14.5262 4.31304 14.6667 4.66667 14.6667H11.3333C11.687 14.6667 12.0261 14.5262 12.2761 14.2762C12.5262 14.0261 12.6667 13.687 12.6667 13.3333V5.33334H14V4.00001H11.3333V2.66668C11.3333 2.31305 11.1929 1.97392 10.9428 1.72387C10.6928 1.47382 10.3536 1.33334 10 1.33334H6C5.64638 1.33334 5.30724 1.47382 5.05719 1.72387C4.80714 1.97392 4.66667 2.31305 4.66667 2.66668V4.00001H2V5.33334H3.33333V13.3333ZM6 2.66668H10V4.00001H6V2.66668ZM5.33333 5.33334H11.3333V13.3333H4.66667V5.33334H5.33333Z'
                  fill='#1A202C'
                />
                <path
                  d='M6 6.66666H7.33333V12H6V6.66666ZM8.66667 6.66666H10V12H8.66667V6.66666Z'
                  fill='black'
                  fillOpacity='0.8'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-6 rounded-b-lg bg-gray-100 px-7 py-3.5'>
        <p className='text-black opacity-50'>10.8.0.8</p>
        <Stats />
      </div>
    </div>
  )
}

export default Card
