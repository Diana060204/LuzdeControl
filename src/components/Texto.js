import React, { useState } from "react";

export function Texto() {
  const [estado, setEstado] = useState("Apagado");

  function switch2() {
    setEstado((prevState) => (prevState === "Encendido" ? "Apagado" : "Encendido"));
  }

  /*return (
    <>
      <div>{estado}</div>
      <button onClick={switch2}>Apagar / Encender</button>
    </>
  );*/
}
