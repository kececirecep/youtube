import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input value={props.value} onChange={props.onChange} type="text" placeholder='Search Video' className='w-[300px] lg:w-[500px] rounded-full px-4 py-2 outline-none border border-gray-600 bg-transparent text-gray-300 font-semibold' />
    </div>
  )
}

export default Input