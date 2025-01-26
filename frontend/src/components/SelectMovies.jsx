import React from 'react'
import { movieslist } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovies.css'

const SelectMovies = () => {
  return (
    <>
    <h1 className='SM_heading'>Select A Movies</h1>
    <div className='SM_main_container'>

      {movieslist.map((el,index) =>{
        return (
          <RadioComponent text = {el}  key = {index }/>
        )
      })}

      </div>
    </>
  )
}

export default SelectMovies
