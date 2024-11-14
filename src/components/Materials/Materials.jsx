import './Materials.css'

//images logos
import cleaning from '../../../public/assets/images/cleaning.svg'
import garden from '../../../public/assets/images/garden.svg'
import beauty from '../../../public/assets/images/beauty.svg'
import painting from '../../../public/assets/images/painting.svg'
import sewing from '../../../public/assets/images/sewing.svg'

function Materials() {
    return (
        <div className="containerMaterials">
            <div className="titleMaterials">
                <h1>Necessary Materials for Our Services</h1>
                <p>
                In this section, we will detail the materials our collaborators need to <br/>
                perform domestic cleaning, gardening, manicure, and painting services.
                </p>
            </div>
            <div id="firstMaterials">
                <div className="logos">
                        <img src={cleaning}></img>
                        <p>
                            <ul>
                                <li>Small shovel</li>
                                <li>Watering can</li>
                                <li>Pruning Shears</li>
                                <li>Gardening gloves</li>
                                <li>Fertilizer</li>
                            </ul>
                        </p>
                </div>
                <div className="logos">
                <img src={garden}></img>
                    <p>
                        <ul>
                            <li>Small shovel</li>
                            <li>Watering can</li>
                            <li>Pruning Shears</li>
                            <li>Gardening gloves</li>
                            <li>Fertilizer</li>
                        </ul>
                    </p>
                </div>
                <div className="logos">
                <img src={beauty}></img>
                    <p>
                        <ul>
                            <li>Small shovel</li>
                            <li>Watering can</li>
                            <li>Pruning Shears</li>
                            <li>Gardening gloves</li>
                            <li>Fertilizer</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="otherMaterials">
        <       div className="logos">
                    <img src={painting}></img>
                    <p>
                        <ul>
                            <li>Small shovel</li>
                            <li>Watering can</li>
                            <li>Pruning Shears</li>
                            <li>Gardening gloves</li>
                            <li>Fertilizer</li>
                        </ul>
                    </p>
                </div>
                <div className="logos">
                    <img src={sewing}></img>
                    <p>
                        <ul>
                            <li>Small shovel</li>
                            <li>Watering can</li>
                            <li>Pruning Shears</li>
                            <li>Gardening gloves</li>
                            <li>Fertilizer</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Materials