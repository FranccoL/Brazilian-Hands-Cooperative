import { Link } from 'react-router-dom'
import './Footer.css'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';


function Footer (){
    const { t } = useTranslation();


    return (
        <footer className="primary-background tertiary-color">
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src="/loogo.svg" className="footer-logo" />
                        <p>{t("Ft_SubTitle")}</p>
                        <div className="d-flex social-links">
                            <a href="https://www.facebook.com/profile.php?id=61563594075044" target="_blank">
                                <img src="/facebook.svg" height="50px"/>
                            </a>
                            <a href="https://www.instagram.com/brazilianhandsco?igsh=MWR0aGRob3QwazZreA==" target="_blank">
                                <img src="/instagram.svg" height="50px"/>
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=%2B353833471038&text&type=phone_number&app_absent=0" target="_blank">
                                <img src="/whatsApp.svg" height="50px"/>
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
                            <Link to="workWithUs"><button className="btheader"> {t("Ft_Bt")}</button></Link>
                        </div>
                        <div className="footer-col">
                            <h3>{t("Ft_Contact")}</h3>
                            <p>brazilianhandscooperative@gmail.com</p>
                            <p>(+353) 833471038</p>
                            <Link to="/"><button className="btAdmin"> {t("Área Admin")}</button></Link>
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