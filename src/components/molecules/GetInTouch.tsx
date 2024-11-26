import ENV from "@config/env"

export default function GetInTouch() {
    return (
        <section>
            <header className="major">
                <h2>Get in touch</h2>
            </header>
            <p>If you want to know more about me you can connect me through Linkedin or send me an email.</p>
            <ul className="contact">
                <li className="icon solid fa-envelope"><a href="#">{ENV.MY_EMAIL}</a></li>
                <li className="icon solid fa-phone">{ENV.MY_PHONE}</li>
                <li className="icon solid fa-globe-americas">{ENV.MY_COUNTRY}</li>
            </ul>
        </section>
    );
}