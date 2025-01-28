import React from 'react';
import '../Css/SeatsInput.css';

const SeatInput = ({seat,index,changeSeats,text,noOfSeats,changeNoOfSeats}) => {

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


  const handleChecked = (text) =>{
    change_seats(text);
  }

  return (
    <div
      name={text}
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}>
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats} 
        value={noOfSeats[text]}
      />
    </div>
  );
}

export default SeatInput;



