import React from 'react'

const ChatMessage = ({ name, message }) => {
    
    return (
        <div className='flex items-center'>
            <img className='h-8'
                alt='user'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
            />
            <span className='text-gray-500 font-bold ml-2'>{name}</span>
            <span className='ml-2'>{message}</span>
        </div>
    )
}

export default ChatMessage
