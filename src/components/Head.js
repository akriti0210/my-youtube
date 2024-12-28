import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [suggestions, setSuggestions] = useState([])

    const [showSuggetions, setShowSuggestions] = useState(false)

    const searchCache = useSelector(store => store.search)
    
    const dispatch = useDispatch();

    // searchCache = {
    //     "iphone":["iphone 11","iphone 16"]
    // }
    // searchQuery = iphone
    
    useEffect(() => {
        // make an api call after every key press
        // but if the difference between 2 API calls < 200ms
        // decline the API call
        const timer = setTimeout(() => {
            if (searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery])
            }
            else
            {
                getSearchSuggestions()
            }
        }, 200)
        
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    
    const getSearchSuggestions = async () => {
        // console.log("getSearchSuggestions");
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col shadow-lg'>
        <div className='flex col-span-1 p-2 m-2'>
            <img className='h-7 cursor-pointer'
                alt='menu'
                onClick={()=>toggleMenuHandler()}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png'
            />
            <a href='/'>
                <img className='h-7 px-4'
                    alt='youtube-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
                />
            </a>
        </div>
        <div className='col-span-10 p-2 m-2'>
            <div>
                <input 
                    className='px-3 border border-gray-400 w-1/2 rounded-l-full' 
                    type='text'
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)} />
                <button className='border border-gray-400 rounded-r-full'>
                    🔍
                </button> 
            </div>
                {
                    showSuggetions && (
                    <div className='fixed bg-white px-5 py-2 w-[33.5rem]'>
                        <ul>
                            {suggestions.map((s) => (
                                <li
                                    className='px-1 m-1 hover:bg-gray-200'
                                >
                                    🔍{s}
                                </li>
                            ))}
                        </ul>
                    </div>)
                }
        </div>
        <div className='col-span-1'>
            <img className='h-8'
                alt='user'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
            />
        </div>
    </div>
  )
}

export default Head
