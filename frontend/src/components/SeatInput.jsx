import React from 'react';
import '../Css/SeatsInput.css';

const SeatInput = ({key,text,noOfSeats,changeNoOfSeats}) => {

  const change_seats = (e) =>{
   changeNoOfSeats({...noOfSeats,[e.target.name]:Number(e.target.value)}) 

    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeats,
        [e.target.name]:Number(e.target.value)
      })
    )


  }

  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
        <input type='number' className='seats-input' placeholder='0' max="30" min= "0" name = {text} onChange={change_seats} value={noOfSeats[text]}  />
    </div>
  )
}

export default SeatInput;



