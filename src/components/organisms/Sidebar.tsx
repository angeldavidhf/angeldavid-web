import ENV from '@config/env';

export default function Sidebar() {

    return (
        <>
            <aside className="col-12 col-md-12 col-xl-3">
                <div className="sidebar box-outer sticky-column">
                    <div className="sidebar__base-info">
                        <figure className="avatar-box">
                            <img src="/src/assets/images/me.jpeg" alt="Angel Hurtado"/>
                        </figure>

                        <div className="text-xl-center">
                            <h3 className="title title--h3 sidebar__name">Angel Hurtado</h3>
                            <div className="badge">Software Engineer</div>
                        </div>

                        <button className="btn btn--small btn--icon-right sidebar__btn js-btn-toggle"><span>Show Contacts</span><i
                            className="feathericon-chevron-down"></i></button>

                    </div>

                    <div className="sidebar__additional-info js-show">
                        <div className="separation"></div>
                        <ul className="details-info">
                            <li className="details-info__item">
                                <span className="box box--s2 icon-box"><i
                                    className="font-icon icon-envelope"></i></span>
                                <div className="contacts-block__info">
                                    <span className="overhead">Email</span>
                                    <a className="text-overflow" href={`mailto:${ENV.MY_EMAIL}`}
                                       title={ENV.MY_EMAIL}>{ENV.MY_EMAIL}</a>
                                </div>
                            </li>

                            <li className="details-info__item">
                                <span className="box box--s2 icon-box"><i className="font-icon icon-phone"></i></span>
                                <div className="contacts-block__info">
                                    <span className="overhead">Phone</span>
                                    <span className="text-overflow" title={ENV.MY_PHONE}>{ENV.MY_PHONE}</span>
                                </div>
                            </li>
                            <li className="details-info__item">
                                <span className="box box--s2 icon-box"><i
                                    className="font-icon icon-calendar"></i></span>
                                <div className="contacts-block__info">
                                    <span className="overhead">Birthday</span>
                                    <span className="text-overflow" title={ENV.MY_BIRTH}>{ENV.MY_BIRTH}</span>
                                </div>
                            </li>
                            <li className="details-info__item">
                                <span className="box box--s2 icon-box"><i
                                    className="font-icon icon-location"></i></span>
                                <div className="contacts-block__info">
                                    <span className="overhead">Location</span>
                                    <span className="text-overflow"
                                          title={ENV.MY_LOCATION}>{ENV.MY_LOCATION}</span>
                                </div>
                            </li>
                        </ul>
                        <div className="separation d-xl-none"></div>

                        <div className="social">
                            <a className="social__link" target="_blank" href={ENV.MY_LINKEDIN}>
                                <i className="feathericon-linkedin"></i>
                            </a>
                            <a className="social__link" target="_blank" href={ENV.MY_GITHUB}>
                                <i className="feathericon-github"></i>
                            </a>
                            <a className="social__link" rel="Download CV" href="/src/assets/docs/CV - Angel Hurtado.pdf" download="CV - Angel Hurtado.pdf">
                                <i className="feathericon-arrow-down-circle"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    );
}