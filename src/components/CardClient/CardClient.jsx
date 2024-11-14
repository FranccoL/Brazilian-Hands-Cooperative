import './CardClient.css'
import Button from '../Button/Button'


//Translation
import { useTranslation } from 'react-i18next';

function CardClient() {
    const { t } = useTranslation();
    

    return (
        <div className="container d-flex fd-column">
            
        <div className="card primary-background " id="secao1">
            
            <h1>{t("Request")}</h1>
            <h2 className="discount">{t("10_Discount")}</h2> 
            
                <form >
                    <div className="d-flex form-group fd-column profile">
                        <input className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"                       
                        />
                      
                        <input className="d-flex form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Phone Number *"                       
                        />
                        <label className="form-select"> Choose the service *</label>
                    <select className="custom-select">
                        <option value="option1">Cleaning </option>
                        <option value="option2">Garden</option>
                        <option value="option3">Nails</option>
                        <option value="option4">Painting</option>
                        <option value="option5">Sewing</option>
                    </select>
                    <textarea className="d-flex form-input "
                        type="text"
                        id="describe"
                        name="name"
                        placeholder="Please describe the specifics of the service you require.*"                       
                        />
                        <input className="d-flex form-input"
                        type="text"
                        id="eircode"
                        name="name"
                        placeholder="Eircode *"                       
                        />
                        <input className="d-flex form-input"
                        type="text"
                        id="recommendation"
                        name="name"
                        placeholder="Recommendation *"                       
                        />
                        <Button className="btform" type="submite" buttonStyle='primary'>
                        Request
                    </Button>
                    

                    </div>
                     
                    
                    
                    </form>
                     
                    </div>
                    

        </div>              
        
        
        
    )
}

export default CardClient

