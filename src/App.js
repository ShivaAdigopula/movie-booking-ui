
import { Route, Routes } from 'react-router';
import './App.css';
import { MovieDetails } from './Containers/MovieDetails';
import { HomePage } from './Containers/Home';
import { MovieBooking } from './Containers/MovieBooking';
import { ManageBookings } from './Containers/ManageBookings';
import { ApplicationBar } from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-details" element={<MovieDetails />} />
          <Route path="/movie-booking" element={<MovieBooking />} />
          <Route path="/manage-bookings" element={<ManageBookings />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
