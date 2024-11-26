import me from '@images/pic10.jpg';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Hi, I’m Ángel</h1>
                        <p>Software Developer</p>
                    </header>
                    <p>A passionate Software Developer with over 5 years of experience creating innovative solutions. With a strong focus on backend development, I specialize in technologies like Python, Node.js, TypeScript, GraphQL, and a variety of databases.</p>
                    <p>I see software development as an art form that allows me to turn ideas into reality. My ultimate goal is to master AI and Machine Learning while inspiring and teaching the next generation of developers.</p>
                    <ul className="actions">
                        <li> <Link to="about" className="button big">Learn More</Link></li>
                    </ul>
                </div>
                <span className="image object">
                    <img src={me} alt="Me" />
                </span>
            </section>
        </>
    );
}