import './PgServicesSection2.css'
import { useTranslation } from 'react-i18next';



function PgServices () {
    const { t } = useTranslation();

    return (
        <div className="image-container jc-space-between">
        <div className="imgSection2 ">
        <img src="/imgSection2.svg" width={1480} />
        
            <div className="imgIconsLeft d-flex fd-column">
                <img src="/IconClean.svg" width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceOne")}</h1>
                <p className="icon-description">{t("Srv_ServiceSubOne")}</p>
                <img src="/IconGard.svg"  width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceTwo")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubTwo")}</p>
                <img src="/IconNails.svg" width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceTree")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubTree")}</p>
               
               
               
               
                <div className="imgIconsRight d-flex fd-column">
                <img src="/IconPaint.svg" width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceFour")}</h1>
                <p className="icon-description">{t("Srv_ServiceSubFour")}</p>
                <img src="/IconSew.svg" width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceFive")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubFive")}</p>
                <img src="/IconPlus.svg" width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceSix")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubSix")}</p>
                </div>
            </div>
        </div>
        </div>  
       
        
    )
}

export default PgServices