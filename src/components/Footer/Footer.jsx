import { Link } from 'react-router-dom'



// ASSETS
import './Footer.css'
import Brazil from '../../assets/brazil.svg'
import FacebookIcon from '../../assets/face.svg'
import InstagramIcon from '../../assets/insta.svg'
import Logo from '../../assets/logobrazil.svg'
import WhatsApp from '../../assets/WhatsApp.svg'

function Footer () {
    return (
        <footer>
            <div className="container">
               <div className='d-flex jc-space-between mobile-fd-column'>
                <div className="footer-logo-col">
                    <img src={Logo} className="footer-logo" />
                    <p className="white-1-color">We take care of your cleaning, you take care of your comfort!</p>
                    <div className="d-flex social-links ">
                    <a href="https://www.facebook.com/profile.php?id=61563594075044" target="_blank">
                        <img src={FacebookIcon} height="50px"/>
                    </a>
                    <a href="https://www.instagram.com/brazilianhandsco?igsh=MWR0aGRob3QwazZreA==" target="_blank">
                        <img src={InstagramIcon} height="50px"/>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=%2B353833471038&text&type=phone_number&app_absent=0" target="_blank">
                        <img src={WhatsApp} height="50px"/>
                    </a>
                    </div>
                </div>
                <div className="d-flex mobile-fd-column">
                <div className="footer-col ">
                        <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                            </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact</h3>
                        <p className="grey-1-color">brazilianhandscooperative@gmail.com</p>
                        <p className="grey-1-color">(+353) 833471038</p>

                    </div>
                    
                 </div>
               </div>
               <div className="d-flex jc-space-between footer-copy ft-size">
                <p className="white-1-color">Copyright ©</p>
                <div className="langs-area d-flex">
                    <img src={Brazil} height="29px"/>
                </div>

               </div>
            </div>
        </footer>
    )
}

export default Footer