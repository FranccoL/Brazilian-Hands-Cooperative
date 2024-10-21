import './HomePage.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


function HomePage() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
   
        <div className="homepage d-flex">
            <div className="homepage-text">
            <h1>Your House, </h1>
            <h2>Our Commitment</h2>
            <p>Talented professionals making your home more beautiful and your life  <br />
            easier with various services.</p>
            <Link>
            <Button buttonStyle="primary" onClick={() => scrollToSection('secao1')}>
            Request your estimate!
            </Button>
            </Link>
            </div>
          </div>
            
        
    )
}

export default HomePage

