import React, { useState } from "react";

const intensidades = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];

export function LuzControl() {
  const [intensidadIndex, setIntensidadIndex] = useState(0);

  const aumentarIntensidad = () => {
    if (intensidadIndex < intensidades.length - 1) {
      setIntensidadIndex(intensidadIndex + 1);
    } else {
      setIntensidadIndex(0); // Si está al 100%, al aumentar regresa a "apagado"
    }
  };

  const disminuirIntensidad = () => {
    if (intensidadIndex > 0) {
      setIntensidadIndex(intensidadIndex - 1);
    } else {
      setIntensidadIndex(intensidades.length - 1); // Si está en "apagado", al disminuir regresa al 100%
    }
  };

  const resetearIntensidad = () => {
    setIntensidadIndex(0); // Resetea a "apagado"
  };

  return (
    <div>
      <div>Intensidad de luz: {intensidades[intensidadIndex]}</div>
      <button onClick={aumentarIntensidad}>Aumentar</button>
      <button onClick={disminuirIntensidad}>Disminuir</button>
      <button onClick={resetearIntensidad}>Resetear</button>
    </div>
  );
}
