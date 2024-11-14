import './ReferEarn.css'

//ASSETS
import Refer from '../../../public/assets/refer.svg'

//Translation
import { useTranslation } from 'react-i18next';

function ReferEarn (){
    const { t } = useTranslation();


    return (
        <div className="container">
        <div className="all-title">
            <h1>{t("Refer_Earn")}</h1>
            <h2>{t("Sub_RE")}</h2>
        </div>
       
        
        <div className="imageRefer">
            <img src={Refer} height={700}/>
            <div className="textOverlay d-flex">
            {t("RE_One")}<br/>
            <br/>{t("RE_Two")}<br/>
            <br/>{t("RE_Tree")}<br/>

            </div>
        </div>
        </div>


)
}

export default ReferEarn