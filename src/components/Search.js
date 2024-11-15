import React, { useEffect, useState } from 'react'
import './Search.css'


function Search({ setFilteredSongs }) {
    const [inquiry, setInquiry] = useState('')

    const handleInputChange = (e) => {
        setInquiry(e.target.value)
    }
    useEffect(() => {
        if (inquiry) {
          fetch(`http://localhost:3001/songs?q=${inquiry}`)
            .then((resp) => resp.json())
            .then((data) => {
              setFilteredSongs(data)
            })
            .catch((err) => console.error('Error searching songs:', err))
        } else {
          fetch('http://localhost:3001/songs')
            .then((resp) => resp.json())
            .then((data) => {
              setFilteredSongs(data)
            })
            .catch((err) => console.error('Error fetching songs:', err))
        }
      }, [inquiry, setFilteredSongs])
  return (
    <div className='search-container'>
        <input
        type="text"
        placeholder="Search for a song..."
        value={inquiry}
        onChange={handleInputChange}
        className='search-input'
        />
        <button className='searchbtn'><span class="material-symbols-outlined">search</span> </button>
    </div>
  )
}

export default Search