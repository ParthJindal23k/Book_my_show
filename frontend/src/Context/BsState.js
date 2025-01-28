import { use, useEffect, useState } from "react";
import BsContext from "./BsContext";
import { seats, slots } from "../data";

const BsState = (props) =>{

    const [errorPopup,setErrorPopup] = useState(false);

    const [errorMessage,setErrorMessage]  = useState("");

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

    const handlePostBooking = async() =>{
        const response = await fetch('https://localhost:8080/api/booking',{
            method:"Post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({movie:movie,slots:time,seats:noOfSeats})
        })

        const data = await response.json();
        setErrorPopup(true);
        setErrorMessage(data.message);

        if(response.status === 200){
            changeTime("");
            changemovie("");
            setLastBookingDetails(data.data);
            window.localStorage.clear();

        }

    }


    const handleGetBooking = async() =>{
        const response = await fetch("http://localhost:8080/api/booking",{
            method:"Get"
        });

        const data = await response.json();
        setLastBookingDetails(data.data);

    }

    useEffect(() =>{
        const movie = window.localStorage.getItem("movie");
        const slots = window.localStorage.getItem("slots");
        const seats = JSON.parse(window.localStorage.getItem("seats"));

        if(movie){
            changemovie(movie);
        }
        if(slots){
            changeTime(slots);
        }

        if(seats){
            changeNoOfSeats(seats);
        }


    },[]);


    return(
        <BsContext.Provider value={{movie,changemovie,time,changeTime,noOfSeats,changeNoOfSeats,lastBookingDetails,handleGetBooking,handlePostBooking,errorMessage,errorPopup,setErrorMessage,setErrorPopup}}>{props.children}</BsContext.Provider>
    )
}

        
export default BsState;