import React, { useState } from 'react'
import './Search.css'


function Search({ onSearch }) {
    const [inquiry, setInquiry] = useState('')

    const handleInputChange = (e) => {
        setInquiry(e.target.value)
        onSearch(e.target.value)
    }
  return (
    <div className='search-container'>
        <input
        type="text"
        placeholder="Search for a song..."
        value={inquiry}
        onChange={handleInputChange}
        className='search-input'
        />
        <button onClick={() => onSearch(inquiry)} className='searchbtn'> Search </button>
    </div>
  )
}

export default Search