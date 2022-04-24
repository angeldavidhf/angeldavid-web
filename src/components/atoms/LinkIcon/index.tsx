import React from "react";

interface ILinkIcon {
    url: string;
    classIcon: string;
    textLabel: string;
    onOpen: {
        target: string;
    };
}

export default function LinkIcon({ url, classIcon, textLabel, onOpen }: ILinkIcon) {

    return (
        <a href={url} className={`icon brands ${classIcon}`} {...onOpen}>
            <span className="label">{textLabel}</span>
        </a>
    );
}