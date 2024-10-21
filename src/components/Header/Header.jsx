import { Link } from 'react-router-dom'
import Button from '../Button/Button'

//ASSETS
import Logo from '../../assets/loogo.svg'
import './Header.css'

function Header (){
    return (
        <header className="secondary-background">
            <div className="container">
                <div className="al-center d-flex ">
                    <Link to="/"><img src={Logo}/></Link>
                    <h1>Brazilian Hands Cooperative</h1>
                    <nav>
                    <ul className="d-flex">
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li> 
                        <li><Link to="/services">Services</Link></li>
                         
                    </ul>
                    </nav>
                    <Button className="btheader" >< Link to="workWithUs">Work With Us</Link></Button>
                </div>
            </div>
        </header>
    )
}

export default Header