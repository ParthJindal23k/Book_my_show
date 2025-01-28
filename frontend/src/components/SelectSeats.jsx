import React, { useContext, useState } from 'react'
import SeatInput from './SeatInput'
import { seats } from '../data'
import '../Css/SelectSeats.css'
import BsContext from '../Context/BsContext'

const SelectSeats = () => {

  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const {noOfSeats,changeNoOfSeats} = context;


  return (
    <div className='SS_wrapper'>
        <h1 className='SS_heading'>Select Seats :</h1>
        <div className='SS_main_container'>
            {seats.map((el,index) =>{
                return(
                    <SeatInput seat = {seat} key = {index} index={index} text = {el} changeSeats={changeSeats} noOfSeats = {noOfSeats} changeNoOfSeats = {changeNoOfSeats}  />
                )
            })}
        </div>
    </div>
  )
}

export default SelectSeats
