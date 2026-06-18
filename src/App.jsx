
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Schedule from './pages/Schedule';

function App() {
  return (
  <Routes>
   <Route element={<Layout />}>
     <Route path="/" element={<Home />} />
     <Route path="/services" element={<Services />} />
     <Route path="/testimonials" element={<Testimonials />} />
     <Route path="/about" element={<About />} />
     <Route path="/privacy-policy" element={<Privacy />} />
     <Route path="/schedule" element={<Schedule />} />
    </Route>
  </Routes>
  );
}

export default App;