import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import FindFlights from './components/FindFlights';
import DisplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Discover from './components/discover';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="navbar">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/discover">Discover</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/findflights">Book</Link></li>
                </ul>               
                </div>
     <Routes>
      <Route path = "/findflights" Component={FindFlights}/>
      <Route path="/home" Component={HomePage}/>
      <Route path="/discover" Component={Discover}/>
      <Route path="/signup" Component={SignupPage} />
      <Route exact path="/login" Component={LoginPage} />
      <Route path="/displayFlights/:from/:to/:departureDate" element={<DisplayFlights/>}/>
      <Route path="/passengerDetails/:flightId" element={<PassengerDetails/>}/>
      <Route path="/confirmReservation/:reservationId" element={<ConfirmReservation/>}/>
     </Routes>
    </div>
  );
}

export default App;
