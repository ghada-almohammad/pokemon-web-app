import React from 'react'
export const SearchPart = ({search, setSearch}) => {
   

  return (
   <input
   type='text'
   value={search}
   placeholder='Search a Pokemon'
   onChange={(e)=> setSearch(e.target.value)}
   style={{ marginBottom: '20px', padding: '8px' }}
   />
   
  )
}
