import axios from 'axios';
import { useEffect, useState } from 'react';
import {Await, useParams} from 'react-router-dom'
import {useNavigate} from "react-router-dom"


function PassengerDetails() {
  const {flightId} = useParams()
  const [data,setData] = useState()
  const [isLoading,setLoading]=useState(true)
  let count = 0
  const [Flightid,setFlightid] = useState()
  const [FirstName,setPassengerFirstName] = useState()
  const [LastName,setPassengerLastName] = useState()
  const [MiddleName,setPassengerMiddleName] = useState()
  const [Email,setPassengerEmail] = useState()
  const [Phone,setPassengerPhone] = useState()
  const [Cardnumber,setCardNumber] = useState()
  const [Expirydate,setExpiryDate] = useState()
  const [Securitycode,setSecurityCode] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
   axios.get('http://localhost:8080/api/Flights/'+flightId).then(res=>{
      setData(res.data);
      setLoading(false);
    })
  },count)

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data={
      passengerFirstName:FirstName,
      passengerLastName:LastName,
      passengerMiddleName:MiddleName,
      passengerEmail:Email,
      passengerPhone:Phone,
      cardNumber:Cardnumber,
      expiryDate:Expirydate,
      securityCode:Securitycode,
      Flightid:Flightid
    }
console.log("Reservation details: "+data);
    axios.post('http://localhost:8080/api/Flights/reserve',data)
    .then(res=>{
      navigate('/confirmReservation/'+res.data.id)
      alert=("Reservation completed!")
    })
  }

  return (
    <div className='detailspassengers'>
      <h2>Confirm Reservation:</h2>
      <h2>Flight Details:</h2>
      Flight ID: {flightId}<br/>
      Airline: {!isLoading?data.Carrier:""}<br/>
      Departure City: {!isLoading?data.From:""}<br/>
      Arrival City: {!isLoading?data.To:""}<br/>
      Departure Time: {!isLoading?data.Dep:""}<br/>
      Arrival Time: {!isLoading?data.Arr:""}<br/>
      <h3>Passenger Details</h3>
      <form>
      First Name: <input type="text" name="passengerFirstName" onChange={e=>setPassengerFirstName(e.target.value)}/><br/><br/>
      Last Name: <input type="text" name="passengerLastName" onChange={e=>setPassengerLastName(e.target.value)}/><br/><br/>
      Middle Name: <input type="text" name="passengerMiddleName" onChange={e=>setPassengerMiddleName(e.target.value)}/><br/><br/>
      Email: <input type="text" name="passengerEmail" onChange={e=>setPassengerEmail(e.target.value)}/><br/><br/>
     Phone: <input type="text" name="passengerPhone" onChange={e=>setPassengerPhone(e.target.value)}/><br/><br/>
     <h3>Card Details</h3>
      Card Number: <input type="text" name="cardNumber" onChange={e=>setCardNumber(e.target.value)}/><br/><br/>
      Expirty Date: <input type="text" name="expiryDate" onChange={e=>setExpiryDate(e.target.value)}/><br/><br/>
      Security Code: <input type="text" name="securityCode" onChange={e=>setSecurityCode(e.target.value)}/><br/><br/>
      Flight ID: <input type="text" name="FlightId" onChange={e=>setFlightid(e.target.value)}/><br/><br/>
    <button onClick={handleSubmit.bind(this)}>Confirm</button>




      </form>

    </div>
  );
}

export default PassengerDetails;
