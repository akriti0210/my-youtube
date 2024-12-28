import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.message);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            // console.log("API Polling")

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(5)
            }))
        }, 900)

        return () => {
            clearInterval(i)
        }

    }, [])
    
    return (
        <>
            <div
                className='ml-2 p-2 h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
                <div>
                    {chatMessages.map((c, i) => {
                        return <ChatMessage
                            key={i}
                            name={c.name}
                            message={c.message}
                        />
                    })}
                </div>
            </div>
            <form
                className='ml-2 w-full border border-black'
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addMessage({
                        name: "Akriti Singh",
                        message: liveMessage
                    }))
                    setLiveMessage('')
                }}
            >
                <input
                    className='w-96'
                    type='text'
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value)
                    }}
                />
                <button className='px-2 mx-2 bg-green-100'>Submit</button>
            </form>
        </>
  )
}

export default LiveChat
