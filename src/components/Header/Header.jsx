import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Header.css'

//Translation
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';


//ASSETS
import Logo from '../../assets/loogo.svg'


function Header (){
    const { t } = useTranslation();


    return (
        <header className="secondary-background">
            <div className="container">
                <div className="al-center d-flex ">
                    <Link to="/"><img src={Logo}/></Link>
                    <h1>Brazilian Hands Cooperative</h1>
                    <nav>
                    <ul className="d-flex">
                        
                        <li><Link to="/">{t("Lk_Home")}</Link></li>
                        <li><Link to="/about">{t("Lk_About")}</Link></li> 
                        <li><Link to="/services">{t("Lk_Services")}</Link></li>
                         
                    </ul>
                    </nav>
                    <Link to="workWithUs"><button className="btheader"> {t("Ft_Bt")}</button></Link>
                    < LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header