import './HomePage.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


import Banner from '../../../public/assets/banner.svg'
import BannerMobile from '../../../public/assets/bannerMobile.svg'

function HomePage() {

    


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const { t } = useTranslation();
    return (
   
        <div className="homepage d-flex fd-column ">
            
            <img src={Banner} alt="Banner" className="desktop-image" />
            <img src={BannerMobile} alt="BannerMobile" className="mobile-image" />
            
            <h1>{t("Sua_Casa")} </h1>
            <h2>{t("Nosso_Compromisso")}</h2>
            <p>{t("Hp_Sub_Title")}</p>
            <Link> <Button buttonStyle="primary btHp" onClick={() => scrollToSection('secao1')}>{t("Hp_Bt")} </Button></Link>
        </div>
          
            
        
    )
}

export default HomePage

