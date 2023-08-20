import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/iFly_logo.png';

const Homeform=()=>{

return(
    <div classname="welcomenote">
       
    <center>
    <img src={logo} width={'320px'} height={'150px'} alt='iFly-logo' />
        <h1>Welcome to iFly!</h1><br></br></center>
        <h2 align="center">🌟Your journey begins here. 🛫 </h2>
        <p>
            We're thrilled to have you on board, ready to explore the world from the comfort of your fingertips. 
            Whether you're a seasoned traveler or embarking on your very first flight, our user-friendly platform is designed to make your domestic flight booking experience seamless and delightful.
            Browse through an extensive selection of flights, compare fares, and find the perfect itinerary that suits your schedule and preferences. Our commitment to providing you with the best deals and options ensures that you'll be jetting off to your destination with a smile.
            Your next adventure is just a few clicks away. 
            Let us handle the details while you dream about your upcoming travels. Fasten your seatbelt and get ready for takeoff – your travel dreams are about to become a reality!
            Thank you for choosing iFly. Bon voyage and safe travels! ✈️🌎</p><br></br><br></br>
    <center>
        <form>
        <Link to='/discover'><button className='button2'>Lets get started!</button></Link>
    </form>
    </center>
    </div>
);
};

export default Homeform;

