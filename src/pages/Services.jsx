import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PgServices from "../components/PgServices/PgServices"
import Carousel from "../components/Carousel/Carousel"
import PgServicesSection2 from "../components/PgServicesSection2/PgServicesSection2"

function Services (){
    return (
        <>
        <Header />
        <PgServices />
        <Carousel />
        <PgServicesSection2 />
        <Footer />
        </>
    )
}

export default Services