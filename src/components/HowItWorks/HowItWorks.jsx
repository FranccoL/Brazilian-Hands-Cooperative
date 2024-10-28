import './HowItWorks.css'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

/*ASSENTS */
import How1 from '../../assets/how1.svg'
import How2 from '../../assets/how2.svg'
import How3 from '../../assets/how3.svg'
import Num1 from '../../assets/num1.svg'
import Num2 from '../../assets/num2.svg'
import Num3 from '../../assets/num3.svg'
import howIsDo from '../../assets/howIsDo.svg'



function HowItWorks() {
    const { t } = useTranslation();
    return (
        
        <div className="container"> 
        <div className="all-title">
            <h1 >{t("How_it_Work")}</h1> 
            </div>
            <div className="d-flex jc-space-between">
                <div className="hows">
                <img src={howIsDo} height="600px"/>
                </div>
           
            <div className="iluNumbs">
            <img src={Num1} height="70px" />
            <img src={Num2} height="70px"/>
            <img src={Num3} height="70px"/>
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

