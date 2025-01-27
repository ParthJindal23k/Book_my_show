import { use, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) =>{

    const [movie, changemovie] = useState('');
    const [time, changeTime] = useState('');

    const [noOfSeats , changeNoOfSeats] = useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:"",
    })

    const [lastBookingDetails,setLastBookingDetails] = useState(null);


    return(
        <BsContext.Provider value={{movie,changemovie,time,changeTime,noOfSeats,changeNoOfSeats,lastBookingDetails}}>{props.children}</BsContext.Provider>
    )
}


export default BsState;