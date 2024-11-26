import { Link } from "react-router-dom";

import ENV from '@config/env';
import LinkIcon from '@atoms/LinkIcon';

export default function SocialNetworks() {
    return (
        <>
            <Link to="" className="logo">
                <strong>Editorial</strong> by HTML5 UP
            </Link>
            <ul className="icons">
                <li>
                    <LinkIcon
                        url={ENV.MY_GITHUB}
                        classIcon="fa-github"
                        textLabel="Github"
                        onOpen={{target: "_blank"}}
                    />
                </li>
                <li>
                    <LinkIcon
                        url={ENV.MY_LINKEDIN}
                        classIcon="fa-linkedin"
                        textLabel="Linkedin"
                        onOpen={{target: "_blank"}}
                    />
                </li>
                <li>
                    <LinkIcon
                        url={ENV.MY_TIKTOK}
                        classIcon="fa-tiktok"
                        textLabel="TikTok"
                        onOpen={{target: "_blank"}}
                    />
                </li>
                <li>
                    <LinkIcon
                        url={ENV.MY_YOUTUBE}
                        classIcon="fa-youtube"
                        textLabel="YouTube"
                        onOpen={{target: "_blank"}}
                    />
                </li>
            </ul>
        </>
    );
}