import React from "react";

interface IPopUp {
    popUpId: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    reviewDate: string;
    children: React.ReactNode;
}

export default function PopUp({ popUpId, imageSrc, imageAlt, title, reviewDate, children }: IPopUp) {
    return (
        <>
            <div id={popUpId} className="popup mfp-hide mfp-with-anim">
                <div className="row">
                    <div className="col-12 col-sm-2 full-rewiew-con-avatar">
                        <figure className="box box-avatar box-avatar--not-border">
                            <img src={imageSrc} alt={imageAlt} />
                        </figure>
                        <div className="review-icon-quote"></div>
                    </div>
                    <div className="col-12 col-sm-10 full-rewiew-con-text">
                        <h2 className="title title--h2 mb-1">{title}</h2>
                        <span className="review-date">{reviewDate}</span>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}