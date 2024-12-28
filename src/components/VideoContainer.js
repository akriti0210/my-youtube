import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard, { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  const dispatch = useDispatch();
  

  useEffect(() => {
    getVideos()
  }, [])
  
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {
        videos.map(video => (
          <Link key={video.id} to={"/watch?v=" + video.id} onClick={()=>dispatch(closeMenu())} ><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  )
}

export default VideoContainer
