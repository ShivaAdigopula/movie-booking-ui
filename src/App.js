
import { Route, Routes } from 'react-router';
import './App.css';
import { MovieDetails } from './Components/MovieDetails';
import { HomePage } from './Containers/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
      
      </header>
    </div>
  );
}

export default App;
