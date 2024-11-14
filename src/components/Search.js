import React, { useState } from 'react'
import search from '../Assets/icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'


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
        <button onClick={() => onSearch(inquiry)} className='searchbtn'> {search} </button>
    </div>
  )
}

export default Search