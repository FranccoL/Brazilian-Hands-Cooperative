import { Link } from 'react-router-dom'
import './Footer.css'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

//ASSETS
import Logo from '../../assets/loogo.svg'
import Brazil from '../../assets/brazil.svg'
import Irland from '../../assets/irland.svg'
import Face from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import WhatsApp from '../../assets/whatsApp.svg'

function Footer (){
    const { t } = useTranslation();


    return (
        <footer className="primary-background tertiary-color">
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo" />
                        <p>{t("Ft_SubTitle")}</p>
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
                            <h3>{t("Title_Lk")}</h3>
                            <ul>
                                <li><Link to="/">{t("Lk_Home")}</Link></li>
                                <li><Link to="/about">{t("Lk_About")}</Link></li>
                                <li><Link to="/services">{t("Lk_Services")}</Link></li>
                            </ul>
                            <Button className="btfooter" >< Link to="workWithUs"> {t("Ft_Bt")}</Link></Button>
                        </div>
                        <div className="footer-col">
                            <h3>{t("Ft_Contact")}</h3>
                            <p>brazilianhandscooperative@gmail.com</p>
                            <p>(+353) 833471038</p>
                            </div>
                            </div>
                            </div>
                            <div className=" ftft d-flex jc-space-between footer-copy">
                            <p>Copyright © - 2024</p>
                        <div className="langs-area d-flex ">
                        <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer