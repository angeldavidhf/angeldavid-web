interface ICaseItem {
    imageSrc: string;
    imageAlt: string;
    title: string;
    caption: string;
}


export default function CaseItem({ imageSrc, imageAlt, title, caption }: ICaseItem) {
    return (
        <>
            <div className="col-12 col-lg-6">
                <div className="case-item box box--s2 box-inner">
                    <img className="case-item__icon" src={imageSrc} alt={imageAlt} />
                    <div>
                        <h3 className="title title--h3">{title}</h3>
                        <p className="case-item__caption">{caption}</p>
                    </div>
                </div>
            </div>
        </>
    );
}