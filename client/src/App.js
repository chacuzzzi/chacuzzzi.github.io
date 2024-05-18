import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Careers from './Pages/Careers.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import Navbar from './Components/Navbar.jsx'
import Footend from './Components/Footend.jsx'

function App() {
  return (
    <Router className="app">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/*<Route path="/test" element={<History />}/>*/}
        </Routes>
      <Footend/>
    </Router>
  )
}

export default App;
