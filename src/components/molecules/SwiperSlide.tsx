import React from "react";

interface ISwiperSlide {
    popUpId: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    children: React.ReactNode;
}

export default function SwiperSlide({ popUpId, imageSrc, imageAlt, title, children }: ISwiperSlide) {
    return (
        <>
            <div className="swiper-slide review-item box box--s2 box-inner js-open-review" data-mfp-src={`#${popUpId}`} data-effect="mfp-zoom-out">
                <figure className="box box-avatar box-avatar--not-border">
                    <img src={imageSrc} alt={imageAlt}/>
                </figure>
                <h4 className="title title--h3">{title}</h4>
                <p className="review-item__caption">{children}</p>
            </div>
        </>
    );
}