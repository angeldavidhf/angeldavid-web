import React from "react";

interface IBasicInput {
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

export default function BasicInput({ type, name, id, placeholder }: IBasicInput) {

    return (
        <input type={type} name={name} id={id} placeholder={placeholder} />
    );
}