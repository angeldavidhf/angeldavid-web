import { Link } from "react-router-dom";

import LinkIcon from '../atoms/LinkIcon.tsx';
// import Chameleon1 from '../../../assets/svgs/chameleon2.svg?component';

export default function HeaderSocialNetworks() {
    return (
        <header id="header">
            <Link to="" className="logo"></Link>
            <ul className="icons">
                <li><LinkIcon url="https://www.youtube.com/" classIcon="fa-youtube" textLabel="YouTube" onOpen={{ target: "_blank" }}/></li>
                <li><LinkIcon url="https://www.twitch.tv/" classIcon="fa-twitch" textLabel="Twitch" onOpen={{ target: "_blank" }}/></li>
                <li><LinkIcon url="https://www.twitter.com/" classIcon="fa-twitter" textLabel="Twitter" onOpen={{ target: "_blank" }}/></li>
                <li><LinkIcon url="https://www.instagram.com/" classIcon="fa-instagram" textLabel="Instagram" onOpen={{ target: "_blank" }}/></li>
                <li><LinkIcon url="https://www.linkedin.com/in/angeldavidhf/" classIcon="fa-linkedin" textLabel="Linkedin" onOpen={{ target: "_blank" }}/></li>
            </ul>
        </header>
    );
}