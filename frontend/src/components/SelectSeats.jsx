import React from 'react'
import SeatInput from './SeatInput'
import { seats } from '../data'
import '../Css/SelectSeats.css'

const SelectSeats = () => {
  return (
    <div className='SS_wrapper'>
        <h1 className='SS_heading'>Select Seats :</h1>
        <div className='SS_main_container'>
            {seats.map((el,index) =>{
                return(
                    <SeatInput key = {index} text = {el} />
                )
            })}
        </div>
    </div>
  )
}

export default SelectSeats
