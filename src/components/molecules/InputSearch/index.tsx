import React from "react";

import BasicInput from "../../atoms/BasicInput.tsx";

export default function InputSearch() {
  return (
    <section id="search" className="alt">
      <form method="post" action="#">
        <BasicInput type="text" name="query" id="query" placeholder="Buscar" />
      </form>
    </section>
  );
}