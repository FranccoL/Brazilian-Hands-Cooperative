import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"
import HomePage from "../components/HomePage/HomePage"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import CardClient from "../components/CardClient/CardClient"
import Carousel from "../components/Carousel/Carousel"
import InformationBanner from "../components/InformationBanner/InformationBanner"
import ReferEarn from "../components/ReferEarn/ReferEarn"
import Feedbacks from "../components/Feedbacks/Feedbacks"




function Home (){
    return (
        <>
        <Header />
        <HomePage />
        <HowItWorks />
        <CardClient />
        <InformationBanner />
        <Carousel />
        <ReferEarn />
        <Feedbacks />
        <Footer />
        
        </>
    )
}

export default Home