import React, { useState } from 'react'
import home from '../Assets/icons/home.svg'
import librarymusic from '../Assets/icons/library_music.svg'
import playlistadd from '../Assets/icons/playlist_add.svg'
import playarrow from '../Assets/icons/play_arrow.svg'
import './Sidebar.css'


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


    
  return (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className="sidebar-links">
        <li><img src={home} alt='home'/></li>
        <li><img src={librarymusic} alt='music library'/></li>
        <li><img src={playlistadd} alt='add playlist'/></li>
        <li><img src={playarrow} alt='play'/></li>
      </ul>
    </div>
  )
}

export default Sidebar