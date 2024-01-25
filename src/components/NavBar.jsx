import React from "react";

export default function NavBar() {
    // la linea fue un intento fallido, busque acá: https://w3.unpocodetodo.info/svg/lineas.php
    // pero no me funcionaron los intentos, en un momento se me rompió el código por la linea asique no intenté más.
    return (
        <>
            <header className="flex items-center bg-black w-screen h-[10vh] justify-between">                
                <div className="bg-white h-[1%] w-[75%]"></div>                 
                <nav className="w-[20%] mr-[3%]">
                    <ul className="list-none flex justify-around p-0">
                        <li className="font-dm text-white mr-[2%] ml-0 font-normal text-base">inicio</li>
                        <li className="font-dm text-white mr-[2%] ml-0 font-normal text-base">servicios</li>
                        <li className="font-dm text-white mr-[2%] ml-0 font-normal text-base">proyectos</li>
                        <li className="font-dm text-white mr-[2%] ml-0 font-normal text-base">clientes</li>
                        <li className="font-dm text-white mr-[2%] ml-0 font-normal text-base">contacto</li>
                    </ul>
                </nav>
            </header>
        </>
    );
  }