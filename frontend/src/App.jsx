import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'



//PAGES
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import AdmHomePage from './pages/admPages/AdmHomePage'
import AdmLoginPage from './pages/admPages/AdmLoginPage'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<AdmHomePage/>}></Route>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/about" element={<Services />}></Route>        
      </Routes>
    </Router>

    </>

  
    
  )
}

export default App