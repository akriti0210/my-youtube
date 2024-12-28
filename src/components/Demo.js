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
    
    return (
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
    )
}

export default Demo
