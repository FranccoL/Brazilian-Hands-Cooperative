import './FormWork.css'

function FormWork() {
    return (
        
        <div className="containerFormWork">
            <div className="titleFormWork">
                <h4>Fill out the Form *</h4>
            </div>
                <form id="contForm" action="" method="POST" >
                    <div className="forms">
                        <div className="formFormWork">
                            <p>
                            <label>Whats your Name?</label><br/><br/>
                            <input type="text" required name="nome">
                            </input>
                            </p>
                            <p>
                            <label>Enter your email.</label><br/><br/>
                            <input type="text" required name="nome">
                            </input>
                            </p>
                            <p>
                            <label>Enter your mobile number.</label><br/><br/>
                            <input type="text" required name="nome">
                            </input>
                            </p>
                            <p>
                            <label>Eircode*</label><br/><br/>
                            <input type="text" required name="eircode">
                            </input>
                            </p>
                        </div>
                        <div className="otherFormWork">
                            <p>
                                <label>What service would you like to <br/>
                                provide?</label><br/>
                                <h3>Choose the service*</h3>
                                <select>
                                    <option>Residential Cleaning</option>
                                    <option>Sewing</option>
                                    <option>Painting</option>
                                    <option>Nails e Beauty</option>
                                    <option>Garden Cleaning</option>
                                </select>
                            </p>
                            <p>
                                <label className="tools">Do you have the materials?</label>
                                <input placeholder="Which ones?" type="text" name="Ferramentas"></input>
                            </p> 
                            <h4>
                                For multiple services, please fill out the form again. *
                            </h4>
                    </div>
                </div>
                    <div className="buttonFormWork">
                        <button>Enviar</button>
                    </div>
            </form>
        </div>

    )
}

export default FormWork