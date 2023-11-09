import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Routes/signup';
import Login from './Routes/login';
import Home from './Routes/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreweryDetails from './Routes/brewery-details';
import ReviewForm from './Routes/ReviewForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/home/breweries/:id' element= {<BreweryDetails />} />
          <Route path="/home/breweries/:id/review" element={<ReviewForm />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
