import React from 'react';

const SearchBox = ({ searchfield,searchChange }) => {
    return(
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='Search robots'
        onChange={searchChange}
         />
    )
}

export default SearchBox;