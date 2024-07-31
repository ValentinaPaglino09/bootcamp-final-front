import React, { useEffect, useState } from 'react'
import style from './SearchBar.module.css'

const SearchBar = ({moviesData, setResults}) => {

  const [searchValue, setSearchValue] = useState('')

 const handleSearch = (e) => {
  e.preventDefault()
  setSearchValue(e.target.value)
  
 }

 useEffect(() => {
  
  const results = moviesData.filter(movie => movie.title.toLowerCase().includes(searchValue) || movie.genre.toLowerCase().includes(searchValue) || (movie.year.toString()).includes(searchValue))
 
  setResults(results)
 }, [searchValue])

  return (
    <div className={style.container}>
      <input className={style.searchBar} placeholder='Search...' type='search' value={searchValue} onChange={handleSearch}></input>
      {/* <input type='submit' value='Search' ></input> */}
    </div>
  )
}

export default SearchBar