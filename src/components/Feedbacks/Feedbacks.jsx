import './Feedbacks.css'

//Translation
import { useTranslation } from 'react-i18next';

function Feedbacks(){
    const { t } = useTranslation();

    return(
        <div className="container">
            <div className="all-title">
                <h1>{t("Reviews")}</h1>
            </div>
        </div>
    )
}

export default Feedbacks