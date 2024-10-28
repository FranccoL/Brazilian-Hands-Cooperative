
import React from 'react';
import { useTranslation } from 'react-i18next';


function PgServices () {
    const { t } = useTranslation();


    return (
        <div className="container">
        <div className="all-title">
            <h1>
            {t("Srv_Tittle")}
            </h1>
            <h2>
            {t("Srv_Subtittle")}
            </h2>
        </div>
        </div>
        
    )
}

export default PgServices