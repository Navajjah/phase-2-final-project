import React from 'react'
import backgroundvid from '../Assets/Videos/video1.mp4'
import './Home.css'
import Player from './Player'
import Search from './Search'
import Commentsection from './Commentsection'


function Home() {
return (
<div className='container'>
  <video src={backgroundvid} autoPlay muted loop className='backgroundVideo'></video>
  <div className='blankScreen'></div> 
  {/* <Search /> */}
  <Commentsection />
  <Player />
  </div>

 
 )
}

export default Home