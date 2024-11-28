
import IconDesign from "@icons/icon-design.svg";
import IconDevelop from "@icons/icon-dev.svg";
import IconApp from "@icons/icon-app.svg";

import CaseItem from "@organisms/CaseItem";
import Testimonials from "@organisms/Testimonials.tsx";

export default function About() {
    return (
        <>
            <div className="pb-0 pb-sm-2">
                <h1 className="title title--h1 title__separate">About Me</h1>
                <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
                    media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p>My job is to build your website so that it is functional and user-friendly but at the same time
                    attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and
                    easy to use. My aim is to bring across your message and identity in the most creative way. I created
                    web design for many famous brand companies.</p>
            </div>
            <h2 className="title title--h2 mt-3">What I'm Doing</h2>
            <div className="row">
                <CaseItem imageSrc={IconDesign} imageAlt={"consulting"} title={"Software Consulting"} caption={"Expert guidance in backend, architecture, and database optimization to build smarter, scalable systems!"}></CaseItem>
                <CaseItem imageSrc={IconDevelop} imageAlt={"develop"} title={"Web Development"} caption={"Developing scalable websites with cutting-edge technologies, tailored to meet your business goals!"}></CaseItem>
                <CaseItem imageSrc={IconApp} imageAlt={"ml-ai"} title={"Machine Learning & AI"} caption={"Innovative AI solutions to transform your data into intelligent systems. Unlock the power of machine learning!"}></CaseItem>
                <CaseItem imageSrc={IconApp} imageAlt={"education"} title={"Education & Training"} caption={"Hands-on learning of modern technologies to excel in software development!"}></CaseItem>
            </div>
            <Testimonials></Testimonials>
        </>
    );
}