import React from "react";

import BasicInput from "@atoms/BasicInput";

export default function InputSearch() {
    return (
        <section id="search" className="alt">
            <form method="post" action="#">
                <BasicInput type="text" name="query" id="query" placeholder="Buscar" />
            </form>
        </section>
    );
}