import './PgServicesSection2.css'
import { useTranslation } from 'react-i18next';



//ASSENTS
import imgSection2 from "../../assets/servicesSection2.svg"
import IconClean from "../../assets/IconClean.svg"
import IconGard from "../../assets/IconGard.svg"
import IconNails from "../../assets/IconNails.svg"
import IconPaint from "../../assets/IconPaint.svg"
import IconSew from "../../assets/IconSew.svg"
import IconPlus from "../../assets/IconPlus.svg"



function PgServices () {
    const { t } = useTranslation();

    return (
        <div className="image-container jc-space-between">
        <div className="imgSection2 ">
        <img src={imgSection2} width={1480} />
        
            <div className="imgIconsLeft d-flex fd-column">
                <img src={IconClean} width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceOne")}</h1>
                <p className="icon-description">{t("Srv_ServiceSubOne")}</p>
                <img src={IconGard}  width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceTwo")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubTwo")}</p>
                <img src={IconNails} width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceTree")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubTree")}</p>
               
               
               
               
                <div className="imgIconsRight d-flex fd-column">
                <img src={IconPaint} width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceFour")}</h1>
                <p className="icon-description">{t("Srv_ServiceSubFour")}</p>
                <img src={IconSew} width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceFive")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubFive")}</p>
                <img src={IconPlus} width={100}/>
                <h1 className="icon-tittle">{t("Srv_ServiceSix")}</h1>
                <p className="icon-description"> {t("Srv_ServiceSubSix")}</p>
                </div>
            </div>
        </div>
        </div>  
       
        
    )
}

export default PgServices