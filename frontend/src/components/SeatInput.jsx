import React from 'react';
import '../Css/SeatsInput.css';

const SeatInput = ({key,text}) => {
  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
        <input type='number' className='seats-input' placeholder='0' max="30" min= "0"/>
    </div>
  )
}

export default SeatInput;



