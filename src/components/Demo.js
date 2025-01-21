import React, { useMemo, useRef, useState } from 'react'
import { findPrime } from '../utils/helper'

const Demo = () => {

    const [text, setText] = useState(0)
    
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    const [y,setY] = useState(0);
    const zRef = useRef(0);

    // const prime = () => {
    //     console.log("prime number calculating")
    //     return findPrime(text);
    // }

    const prime = useMemo(() => findPrime(text),[text]);

    console.log("Rendering")

    const listRef = useRef(null)
    
    function scrollToIndex(index) {
        const listNode = listRef.current;
        // This line assumes a particular DOM structure:
        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
    }
    
    return (
        <div className='grid grid-flow-row'>
            <div className={"m-4 p-2 w-96 h-96 border border-black " +
                (isDarkTheme && "bg-gray-900 text-white")} >
                <div>
                    <button
                        className='m-10 p-2 bg-green-300'
                        onClick={()=>setIsDarkTheme(!isDarkTheme)}
                    >
                        Toggle
                    </button>
                </div>
                <div>
                    <input 
                        className='m-2 border border-black'
                        type='number'
                        value={text}
                        onChange={(e)=>setText(e.target.value)} />
                </div>
                <div>
                    <h1 className='mt-4 font-bold text-xl'>nth Prime : {prime}</h1>
                </div>
                <div>
                    <button
                        className='m-10 p-2 bg-green-300'
                        onClick={() => {
                            setY(y+1)
                            console.log("y="+y)
                        }}
                    >
                        Increase y set value
                    </button>
                    <span className='text-xl font-bold'>{zRef.current}</span>
                </div>
                <div>
                    <button
                        className='m-10 p-2 bg-green-300'
                        onClick={() => {
                            zRef.current = zRef.current + 1
                            console.log("zRed="+zRef.current)
                        }}
                    >
                        Increase ref value
                    </button>
                    <span className='text-xl font-bold'>{zRef.current}</span>
                </div>
            </div>
            <div className='m-4 p-4'>
                <nav className='flex space-x-10'>
                    <button className='border border-gray-600 bg-gray-200 rounded-lg w-10' onClick={() => scrollToIndex(0)}>
                    Neo
                    </button>
                    <button className='border border-gray-600 bg-gray-200 rounded-lg w-10' onClick={() => scrollToIndex(1)}>
                    Millie
                    </button>
                    <button className='border border-gray-600 bg-gray-200 rounded-lg w-10' onClick={() => scrollToIndex(2)}>
                    Bella
                    </button>
                </nav>
                <div className='w-30 overflow-scroll'>
                    <ul className='flex' ref={listRef}>
                    <li>
                        <img
                        src="https://placecats.com/neo/300/200"
                        alt="Neo"
                        />
                    </li>
                    <li>
                        <img
                        src="https://placecats.com/millie/200/200"
                        alt="Millie"
                        />
                    </li>
                    <li>
                        <img
                        src="https://placecats.com/bella/199/200"
                        alt="Bella"
                        />
                    </li>
                    </ul>
                    </div>
                </div>
        </div>
    )
}

export default Demo
