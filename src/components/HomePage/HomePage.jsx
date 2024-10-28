import './HomePage.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';


function HomePage() {

    


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const { t } = useTranslation();
    return (
   
        <div className="homepage d-flex">
            <div className="homepage-text">
                
            <h1>{t("Sua_Casa")} </h1>
            <h2>{t("Nosso_Compromisso")}</h2>
            <p>{t("Hp_Sub_Title")}</p>
            <Link>
            <Button buttonStyle="primary btHp" onClick={() => scrollToSection('secao1')}>
            {t("Hp_Bt")}
            </Button>
            </Link>
            </div>
          </div>
            
        
    )
}

export default HomePage

