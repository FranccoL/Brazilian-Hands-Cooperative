import './AboutBHC.css'



//ASSENTS
import AboutUs from '../../assets/aboutUs.svg'
import Profile from '../../assets/profile.svg'

import { useTranslation } from 'react-i18next';



function CardMarcelo(){
    const { t } = useTranslation();

    
    

    return(
        <div className="container ">
            <div className="cardAbout d-flex jc-space-between">
                <div className="pictureMarcelo">
                    <img src={Profile} height={300}/>
                </div>
                <div className="descriptionMarcelo">
                    <h1>
                    {t("Abt_Descriptiom")}
                    </h1>
                    <h2>
                    {t("Abt_Descriptiom2")}
                    </h2>
                </div>
            </div>
           
            <div className="all-title">
            <h1> {t("Abt_TittleWhoUs")} </h1>
            <h2 className="Abt_WhoUs">
            {t("Abt_WhoUs")}
            </h2>
        </div>

        <div className="cardWhy al-center d-flex">
        <div className="all-title">
        <h1>{t("Abt_TittleWhyUs")}</h1>
        <h2 className="description-whyUs">{t("Abt_WhyUs")}</h2>
            </div>
        </div>

        <div className="container-backgroundAbout">
        <img src={AboutUs} width={1500} />
            <div className="textAbout">
                <h1>{t("Abt_TittleOffer")}</h1>
                <h2>{t("Abt_Offer1")}</h2>
                   <p>{t("Abt_Offer1.1")}</p>
                
                <h2>{t("Abt_Offer2")}</h2>
                   <p>{t("Abt_Offer2.2")}</p>
                
                <h2>{t("Abt_Offer3")}</h2>
                   <p>{t("Abt_Offer3.3")}</p>
            </div>
        </div>
        </div>
    )
}

export default CardMarcelo