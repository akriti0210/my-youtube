import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    
    if (!isMenuOpen) return null;
  return (
    <div className='col-span-1 p-2 m-2'>
      <ul className='p-2'>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold'>Subscription</h1>
      <ul className='p-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold'>Watch Later</h1>
      <ul className='p-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
