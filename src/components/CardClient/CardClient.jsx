import './CardClient.css'
import Button from '../Button/Button'
import React, { useState } from 'react';


function CardClient() {

    return (
        <div className="container d-flex fd-column">
            
        <div className="card primary-background " id="secao1">
            
            <h1>Request your free quote now!</h1>
            
            <div className="card2 d-flex ">
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
                        <label class="form-select"> Choose the service *</label>
                    <select class="custom-select">
                        <option value="option1">Cleaning </option>
                        <option value="option2">Garden</option>
                        <option value="option3">Nails</option>
                        <option value="option4">Painting</option>
                        <option value="option5">Sewing</option>
                    </select>
                    <input className="d-flex form-input2"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Please describe the specifics of the service you require. *"                       
                        />
                        <input className="d-flex form-input2"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Eircode *"                       
                        />
                        <input className="d-flex form-input2"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Recommendation *"                       
                        />
                        
                    

                    </div>
                     
                    <Button className="btform" type="submite" buttonStyle='primary'>
                        Request
                    </Button>
                    
                    </form>
                     
                    </div>
                    <h2>On your first quote, you GET a 10% DISCOUNT!</h2> 

        </div>              
        </div>
        
        
    )
}

export default CardClient

