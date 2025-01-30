import './AboutBHC.css'

import { useTranslation } from 'react-i18next';



function CardMarcelo(){
    const { t } = useTranslation();

    
    

    return(
        <div className="container ">
            <div className="cardAbout d-flex jc-space-between">
                <div className="pictureMarcelo">
                    <img src="/profile.svg" height={300}/>
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
        <div className="all-title ttWhyUs">
        <h1>{t("Abt_TittleWhyUs")}</h1>
        <h2 className="description-whyUs">{t("Abt_WhyUs")}</h2>
            </div>
        </div>

        <div className="container-backgroundAbout">
        <img src="/AboutUs.svg" width={1500} />
            
        </div>
        </div>
    )
}

export default CardMarcelo