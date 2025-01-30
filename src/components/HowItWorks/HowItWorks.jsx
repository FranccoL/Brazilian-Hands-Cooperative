import './HowItWorks.css'
import { useTranslation } from 'react-i18next';


function HowItWorks() {
    const { t } = useTranslation();
    return (
        
        <div className="container"> 
        <div className="all-title">
            <h1 >{t("How_it_Work")}</h1> 
            </div>
            <div className="d-flex jc-space-between">
                <div className="hows">
                <img src="/howIsDo.svg" height="600px"/>
                </div>
           
            <div className="iluNumbs">
            <img src="/num1.svg" height="70px" />
            <img src="/num2.svg" height="70px"/>
            <img src="/num3.svg" height="70px"/>
            </div>

            <div className="description">
                <h1>{t("Item_One")}</h1>
                <p>{t("Sub_One")}</p>
                <h1>{t("Item_Two")}</h1>
                <p>{t("Sub_Two")}</p>
                <h1>{t("Item_Tree")}</h1>
                <p>{t("Sub_Tree")}</p>         
            </div>

            </div> 


        
        </div>
            
        
    )
}

export default HowItWorks

