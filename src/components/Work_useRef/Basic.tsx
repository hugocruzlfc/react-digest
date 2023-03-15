import React, { useRef } from "react";

export default function Basic() {
  const myRef = useRef(null);

  return <div ref={myRef}>Hello, world!</div>;
}

//IMPORTANT: useRef no desencadena nuevas renderizaciones cuando cambia su valor.

// useRef Casos de uso
// Acceso y manipulación de elementos DOM
// Administrar el estado de los componentes sin causar re-renderizaciones
// Implementación de animaciones y temporizadores
// Manejo de formularios y entrada del usuario
// Acceso y manipulación de elementos DOM
