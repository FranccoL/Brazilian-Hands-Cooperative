import { Link } from 'react-router-dom'



//ASSETS
import './Header.css'
import Logo from '../../assets/logobrazil.svg'

function Header () {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img className="bhc" src={Logo} /></Link>
                    <h1 className="title">Brazilian Hands Cooperation</h1>
                    
                
                <nav className="d-flex jc-end">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <button className="workus">Join Us</button>


                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header