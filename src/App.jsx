import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// PAGES
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import WorkWithUs from './pages/workWithUs'






function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/workWithUs" element={<WorkWithUs />}></Route>
      </Routes>
    </Router>
  )
}

export default App
