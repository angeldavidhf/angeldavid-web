import SwiperSlide from "@molecules/SwiperSlide";

export default function Testimonials() {

    return (
        <>
            <div className="testimonials">
                <h2 className="title title--h2 mt-3">Testimonials</h2>

                <div className="swiper-container js-carousel-review">
                    <div className="swiper-wrapper">
                        <SwiperSlide popUpId={'review-1'} imageSrc={'/src/assets/images/avatar-1.png'} imageAlt={'Daniel Lewis'} title={'Daniel Lewis'}>
                            Ricardo was hired to create a corporate identity. We were very pleased with the work done...
                        </SwiperSlide>
                        <SwiperSlide popUpId={'review-2'} imageSrc={'/src/assets/images/avatar-2.png'} imageAlt={'Jessica Miller'} title={'Jessica Miller'}>
                            Thanks to the skill of Ricardo, we have a design that we can be proud of. We are impressed with...
                        </SwiperSlide>
                        <SwiperSlide popUpId={'review-3'} imageSrc={'/src/assets/images/avatar-3.png'} imageAlt={'Emily Evans'} title={'Emily Evans'}>
                            Ricardo did a miracle with my website. It looks exactly as I imagined it. Now I have a profession...
                        </SwiperSlide>
                        <SwiperSlide popUpId={'review-4'} imageSrc={'/src/assets/images/avatar-4.png'} imageAlt={'Henry William'} title={'Henry William'}>
                            Thank you very much for your work on our project. It was a big help for us. Thanks to the...
                        </SwiperSlide>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </div>

        </>
    )
}