
import './Carousel.css'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

//Translation
import { useTranslation } from 'react-i18next';


//ASSETS
import Garden from '../../assets/garden.svg'
import Nails from '../../assets/nails.svg'
import Sewing from '../../assets/sewing.svg'
import Painting from '../../assets/Painting.svg'
import Cleaning from '../../assets/cleaning.svg'

function Carousel() {
    const { t } = useTranslation();


    return (
        <div className="container">
            <h1 className="heading">{t("Title_Carousel")}</h1>
            <Swiper
            effect={'coverflow'}
            grabCursoe={ true }
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            } }
            pagination={ {el: '.swiper-pagination',clickable: true}}
            navigation={ {
                         nextEl:'.swiper-button-next',
                         prevEl:'.swiper-button-prev',
                         clickable:true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
            >
                <SwiperSlide>
                    <img src={Cleaning} alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Nails} alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Sewing} alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Painting} alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Garden} alt="slide-image" />
                </SwiperSlide>

                <div className="slider-container">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </Swiper>
        </div>
       
        
    )
}

export default Carousel

