import Stats from './Stats'

const Actions = () => {
  return (
    <div className='mb-6 mt-10 flex justify-between py-2.5'>
      <div className='flex items-center gap-5'>
        <p>21 clients</p>
        <Stats />
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center'>
          <label htmlFor='check' className='inline-flex items-center'>
            <input type='checkbox' className='border-2 border-gray-300 text-black focus:border-gray-300' />
            <span className='ml-2'>Только активные</span>
          </label>
        </div>
        <div className='rounded-md border border-inherit py-2.5 px-4'>
          <label htmlFor='check'>
            <span>По дате добавления</span>
            <select name='' id=''>
              <option value=''></option>
            </select>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Actions
