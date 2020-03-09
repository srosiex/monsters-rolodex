import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    //no access to state because they don't have access to the 
    //constructor or lifecycle methods
<input
className='search' 
type='search' 
placeholder={placeholder} 
onChange={handleChange} 
/>
     

)