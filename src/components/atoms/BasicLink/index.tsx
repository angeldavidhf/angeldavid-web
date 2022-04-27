import React from "react";

interface IBasicLink {
  url: string;
  classIcon: string;
  textLabel: string;
  onOpen: {
    target: string;
  };
}

export default function BasicLink({ url, classIcon, textLabel, onOpen }: IBasicLink) {

  return (
    <a href={url} className={`icon brands ${classIcon}`} {...onOpen}>
      <span className="label">{textLabel}</span>
    </a>
  );
}