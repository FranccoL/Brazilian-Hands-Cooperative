import{ useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

//Translation
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

//COMPONENTS
import Button from '../Button/Button'

//ASSETS
import Logo from '../../assets/loogo.svg'


function Header (){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    } 
    const { t } = useTranslation();


    return (
        <header className="secondary-background">
            <div className="container">
                <div className="al-center d-flex hdImg">
                    <Link to="/"><img src={Logo}/></Link>
                    <h1>Brazilian Hands Cooperative</h1>
                    <div className="mobile-menu">
                        <Button buttonStyle="primary close-btn" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </Button>
                    <ul className="d-flex">
                        
                        <li><Link to="/">{t("Lk_Home")}</Link></li>
                        <li className="abt-ql"><Link to="/about">{t("Lk_About")}</Link></li> 
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