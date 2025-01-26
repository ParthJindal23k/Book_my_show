import React from 'react'
import SelectMovies from '../components/SelectMovies'
import '../Css/Home.css';
import LastBookingdetails from '../components/LastBookingdetails';
import TimeSchedule from '../components/TimeSchedule';
import SelectSeats from '../components/SelectSeats';

const Home = () => {
  return (
    <div className='container'>
      <div className='wrapper'>

      <div className='select_movie_component'>
      <SelectMovies/>
      </div>
      <div className='last_booking_details_container'>
        <LastBookingdetails/>
      </div>
      </div>

      <div className='time_seats_container'>
        <TimeSchedule/>
        <SelectSeats/>
        <button className='BN-btn'>Book Now </button>
      </div>

    </div>
  )
}

export default Home
