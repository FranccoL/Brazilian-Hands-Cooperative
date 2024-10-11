import './ReferEarn.css'

//ASSETS
import Refer from '../../assets/refer.svg'

function ReferEarn (){
    return (
        <div className="container">
        <div className="titleReferEarn">
            <h1>REFER AND EARN!</h1>
            <h2 >How about getting a discount while helping your friends keep their homes clean and organized? By referring our cleaning services, you and your referral will receive a 10% discount on your next service.</h2>
        </div>
        <div className="imageRefer">
            <img src={Refer} height={700}/>
            <div className="textOverlay d-flex">
            1. Refer a friend who hasn't used our <br/>services yet.When they complete their<br/> first cleaning service, both of you will <br/>     receive a 10% discount <br/>on your next cleaning!<br/>
            <br/>2. It's an easy way to take care of your <br/>home and save money! <br/>
            <br/>Contact us for more details and start referring today!"<br/>

            </div>
        </div>
        </div>


)
}

export default ReferEarn