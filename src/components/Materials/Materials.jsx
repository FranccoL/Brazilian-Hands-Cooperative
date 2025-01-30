import './Materials.css'


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
                        <img src="/cleaning.svg"></img>
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
                <img src="/garden.svg"></img>
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
                <img src="/beauty.svg"></img>
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
                    <img src="/painting.svg"></img>
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
                    <img src="/sewing.svg"></img>
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