import './HomePage.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

/*ASSENTS*/




function HomePage() {
    return (
        <div className="homepage d-flex">
            <div className="homepage-text">
            <h1>Your House, </h1>
            <h2>Our Commitment</h2>
            <p>Talented professionals making your home more beautiful and your life  <br />
            easier with various services.</p>
            <Link>
            <Button buttonStyle="primary">
            Request your estimate!
            </Button>
            </Link>
            </div>
          </div>
            
        
    )
}

export default HomePage

