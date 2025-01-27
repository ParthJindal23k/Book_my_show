import React, { useContext } from 'react'
import { movieslist } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovies.css'
import BsContext from '../Context/BsContext'

const SelectMovies = () => {
  
  const context = useContext(BsContext);
  const {movie,changemovie} = context;

  const handleChangeMovie = (val) =>{
    changemovie(val);
    window.localStorage.setItem("Movie",val);
  }

  return (
    <>
    <h1 className='SM_heading'>Select A Movies</h1>
    <div className='SM_main_container'>

      {movieslist.map((el,index) =>{
        return (
          <RadioComponent text = {el}  key = {index } data = {movie} changeSelection = {handleChangeMovie} />

        )
      })}

      </div>
    </>
  )
}

export default SelectMovies
