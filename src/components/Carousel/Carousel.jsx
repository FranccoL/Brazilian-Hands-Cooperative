
import './Carousel.css'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

//Translation
import { useTranslation } from 'react-i18next';


function Carousel() {
    const { t } = useTranslation();


    return (
        <div className="container">
            <h1 className="all-title">{t("Title_Carousel")}</h1>
            <Swiper
            effect={'coverflow'}
            grabCursor={ true }
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
                    <img src="/cleaning.svg" alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/nails.svg" alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/sewing.svg" alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/painting.svg" alt="slide-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/cleaning.svg" alt="slide-image" />
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

