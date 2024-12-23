import pic10 from '../assets/images/pic10.jpg';

export default function Home() {
    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Hi, I’m Ángel</h1>
                        <p>Senior Front-end developer</p>
                    </header>
                    <p>I'm a software engineer in Colombia. I love building open-source projects and writing about what I learn. </p>
                    <ul className="actions">
                        <li><a href="#" className="button big">Learn More</a></li>
                    </ul>
                </div>
                <span className="image object">
                    <img src={pic10} alt="pic10" />
                </span>
            </section>
        </>
    );
}