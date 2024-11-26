import { useEffect } from "react";
import { Link } from "react-router-dom";

import useBreakpoints from "@hooks/useBreakpoints";
import useSidebar from "@hooks/useSidebar";
import useObjectFitPolyfill from "@hooks/useObjectFitPolyfill";

import InputSearch from "@molecules/InputSearch.tsx";
import GetInTouch from "@molecules/GetInTouch.tsx";


const breakpointsConfig = {
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: ["0", "360px"],
};


export default function DrawerNavigator() {
    useBreakpoints(breakpointsConfig);

    useSidebar(".toggle", "#sidebar");
    useObjectFitPolyfill(".image.object");

    useEffect(() => {
        document.body.classList.remove("is-preload");
    }, []);

    return (
        <>
            <div id="sidebar">
                <a href="#sidebar" className="toggle">
                    Toggle
                </a>
                <div className="inner">
                    <InputSearch/>
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="portfolio">Portfolio</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                        </ul>
                    </nav>
                    <GetInTouch />
                </div>
            </div>
        </>
    );
}