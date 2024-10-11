import { Link } from 'react-router-dom'
import './Footer.css'
import Button from '../Button/Button'


//ASSETS
import Logo from '../../assets/loogo.svg'
import Brazil from '../../assets/brazil.svg'
import Irland from '../../assets/irland.svg'
import Face from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import WhatsApp from '../../assets/whatsApp.svg'

function Footer (){
    return (
        <footer className="primary-background tertiary-color">
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo" />
                        <p>We take care of your cleaning, you take care of your comfort!</p>
                        <div className="d-flex social-links">
                            <a href="https://www.facebook.com/profile.php?id=61563594075044" target="_blank">
                                <img src={Face} height="50px"/>
                            </a>
                            <a href="https://www.instagram.com/brazilianhandsco?igsh=MWR0aGRob3QwazZreA==" target="_blank">
                                <img src={Instagram} height="50px"/>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=%2B353833471038&text&type=phone_number&app_absent=0" target="_blank">
                                <img src={WhatsApp} height="50px"/>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Button buttonStyle="secondary" Link to="about"> Work With Us </Button></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p>brazilianhandscooperative@gmail.com</p>
                            <p>(+353) 833471038</p>
                            </div>
                            </div>
                            </div>
                            <div className=" ftft d-flex jc-space-between footer-copy">
                            <p>Copyright © - 2024</p>
                        <div className="langs-area d-flex ">
                            <img src={Brazil} height="50px" />
                            <img src={Irland} height="50px"/> 
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer