import './Hero.css'
import LP from '../../assets/hero.svg'

function Hero () {
    return (
        <>
        <div className="image-container">
        <img src={LP}  width="1513px"/>
        <div className="overlay-text">
            <h2>Your Home</h2>
            <h1>Our Commitment</h1>
            <p>Talented professionals making your home more beautiful and your life easier with various services</p>
            <button className="forms">Get your quote</button>
            </div> 
            
        </div>
        </>
    )
}

export default Hero