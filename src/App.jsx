
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Esthetics from './pages/Esthetics';
import IVTherapy from './pages/IVTherapy';
import WeightLoss from './pages/WeightLoss';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Booking from './pages/Booking';

function App() {
  return (
  <Routes>
   <Route element={<Layout />}>
     <Route path="/" element={<Home />} />
     <Route path="/esthetics" element={<Esthetics />} />
     <Route path="/iv-therapy" element={<IVTherapy />} />
     <Route path="/weight-loss" element={<WeightLoss />} />
     <Route path="/about" element={<About />} />
     <Route path="/privacy-policy" element={<Privacy />} />
     <Route path="/booking" element={<Booking />} />
    </Route>
  </Routes>
  );
}

export default App;