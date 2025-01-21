import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa6';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [suggestions, setSuggestions] = useState([])

    const [showSuggetions, setShowSuggestions] = useState(false)

    const searchCache = useSelector(store => store.search)
    
    const dispatch = useDispatch();

    const [darkMode, setDarkMode] = useState(false)

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

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle("dark")
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
        <div className='flex'>
            <div className='m-2 pt-4'>
                <img className='h-10'
                    alt='user'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
                />
            </div>
            <div className='px-2 py-5'>
                {/* <label class="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                </label> */}
                {/* <FaToggleOff className='h-8 w-10' /> */}
                <button onClick={() => darkModeHandler()}>
                    {
                        darkMode && <FaToggleOn size={45} />
                    }
                    {
                        !darkMode && <FaToggleOff size={45} />
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Head
