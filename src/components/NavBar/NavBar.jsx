import React from "react";
import customCss from "./NavBar.module.css";

export default function NavBar() {
    // la linea fue un intento fallido, busque acá: https://w3.unpocodetodo.info/svg/lineas.php
    // pero no me funcionaron los intentos, en un momento se me rompió el código por la linea asique no intenté más.
    return (
        <>
            <header className={customCss.headerCss}>
                <svg>
                    <line></line> 
                </svg>
                <nav className={customCss.navCss}>
                    <ul className={customCss.listCss}>
                        <li>inicio</li>
                        <li>servicios</li>
                        <li>proyectos</li>
                        <li>clientes</li>
                        <li>contacto</li>
                    </ul>
                </nav>
            </header>
        </>
    );
  }