import React, { useState } from 'react'
import backgroundvid from '../Assets/Videos/video1.mp4'
import './Home.css'
import Player from './Player'
import AddSongForm from './AddSongForm'
import Sidebar from './Sidebar'
// import Search from './Search'



function Home() {
  const [showAddSongForm, setShowAddSongForm] = useState(false)

  const toggleAddSongForm = () => {
    setShowAddSongForm(!showAddSongForm)
  }

return (
<div className='container'>
  <video src={backgroundvid} autoPlay muted loop className='backgroundVideo'></video>
  <div className='blankScreen'></div> 
  <Sidebar toggleAddSongForm={toggleAddSongForm} />
  {/* <Search /> */}
  <Player />
  {showAddSongForm && <AddSongForm />}
  </div>

 
 )
}

export default Home