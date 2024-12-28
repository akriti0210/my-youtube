import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button 
            className='bg-gray-200 px-2 m-2 rounded-md'>
              {name}
        </button>
    </div>
  )
}

export default Button
