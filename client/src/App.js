import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <Router className="app">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/test" element={<History />}/>*/}
        </Routes>
    </Router>
  )
}

export default App;
