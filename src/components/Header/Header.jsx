import { Link } from 'react-router-dom'
import Button from '../Button/Button'

//ASSETS
import Logo from '../../assets/loogo.svg'
import './Header.css'

function Header (){
    return (
        <header className="secondary-background">
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo}/></Link>
                    <nav>
                    <ul className="d-flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Button buttonStyle="secondary" Link to="about"> Work With Us </Button></li>
                        
                    </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header