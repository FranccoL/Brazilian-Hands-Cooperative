import './HowItWorks.css'

/*ASSENTS */
import How1 from '../../assets/how1.svg'
import How2 from '../../assets/how2.svg'
import How3 from '../../assets/how3.svg'
import Num1 from '../../assets/num1.svg'
import Num2 from '../../assets/num2.svg'
import Num3 from '../../assets/num3.svg'







function HowItWorks() {
    return (
        <div className="container"> 
        <div className="title-howWorks">
            <h1>HOW DOES IT WORK?</h1> 

            <div className="d-flex jc-space-between">
                <div className="hows">
                <img src={How1}height="200px" />
                <img src={How2}height="200px" />
                <img src={How3}height="200px" />
                </div>
           
            <div className="iluNumbs">
            <img src={Num1} height="70px" />
            <img src={Num2} height="70px"/>
            <img src={Num3} height="70px"/>
            </div>

            <div className="description">
                <h1>Choose the Room:</h1>
                <p>Select the space that needs attention. Whether it's the living room, kitchen, bathroom, or bedrooms, we take care of every detail.</p>
                <h1>Define the type of service:</h1>
                <p>Choose from our options: general cleaning, nails, painting, sewing, and gardening. We tailor our services to meet your specific needs.</p>
                <h1>Easy Scheduling:</h1>
                <p>Schedule your cleaning in just a few clicks! Choose the date and time that best fit your routine, and leave the rest to us.</p>         
            </div>

            </div> 


        </div>
        </div>
            
        
    )
}

export default HowItWorks

