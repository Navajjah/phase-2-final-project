import React, { useState } from 'react'
import home from '../Assets/icons/home.svg'
import librarymusic from '../Assets/icons/library_music.svg'
import playlistadd from '../Assets/icons/playlist_add.svg'
import playarrow from '../Assets/icons/play_arrow.svg'
import addbtn from '../Assets/icons/add.svg'
import pause from '../Assets/icons/pause.svg'
import tunesettings from '../Assets/icons/tune_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import './Sidebar.css'


function Sidebar({ toggleAddSongForm }) {
    const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
 

    
  return (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className="sidebar-links">
        <li><img src={home} alt='home'/></li>
        <li><img src={librarymusic} alt='music library'/></li>
        <li><img src={playlistadd} alt='add playlist'/></li>
        <li><img src={addbtn} alt='add' onClick={toggleAddSongForm}/></li>
        <li><img src={playarrow} alt='play'/></li>
        <li><img src={pause} alt='pause'/></li>
        <li><img src={tunesettings} alt='tune settings'/></li>
      </ul>
    </div>
  )
}

export default Sidebar